import Main from "./Main";

export default class ServicesUpdate
{
    static #apiBridge = new Main();

    static update = async (serviceIdentifierString = "", requestModel = null, data = {}) => {
        let url = `services/${serviceIdentifierString}`;
        let dataToSend = {};

        let {type = "", params = {}, requestType = "post"} = requestModel;

        switch (type.toLocaleLowerCase()) {
            case "inurl":
                let tmpUrl = "";
                [requestType, tmpUrl] = ServicesUpdate.#getInUrlFinalPath(params, data, requestType);
                url += `/${tmpUrl}`;
                break;
            case "payload":
                dataToSend = ServicesUpdate.#getDataToSend(params, data);
                break;
            default:
                break;
        }

        return this.#apiBridge[`${requestType}Request`](url, dataToSend);
    }

    static #getInUrlFinalPath = (pattern = {}, data = {}, method = "post") => {
        let tables = Object.keys(pattern).filter(table => table === "origin" || table === "destination");
        let fieldsNeeded = {};
        let tempURL = "";

        tables.forEach(table => {
            let fields = Object.keys(pattern[table]);

            fields.forEach(field => {
                if (field === "check" && data[table][field] === false) {
                    if (pattern[table][field]?.canBeUsedAsDelete) {
                        method = "delete";
                    }
                }

                if (pattern[table][field]?.hasOwnProperty("order")) {
                    fieldsNeeded[pattern[table][field]["nameToSend"]] = {
                        order: pattern[table][field].order,
                        value: data[table][field],
                    };
                }
            })
        });

        let sortable = Object.values(fieldsNeeded);

        let sortedList = [...sortable].sort((a, b) => a.order - b.order);

        sortedList.forEach(item => {
            tempURL += `${item.value}/`;
        })
        
        return [method, tempURL];
    }

    static #getDataToSend = (pattern = {}, data = {}) => {
        let finalData = {};
        let tables = Object.keys(pattern).filter(table => table === "origin" || table === "destination");

        tables.map(table => {
            let fields = Object.keys(pattern[table]);

            fields.map(field => {
                if (field !== "check") {
                    if (pattern.hasOwnProperty("removeTableNameFromPayload") && pattern?.removeTableNameFromPayload === true) {
                        finalData = {
                            ...finalData,
                            [pattern[table][field]?.nameToSend ?? field]: ServicesUpdate.#checkDataValidationForServer(data[table][field], pattern[table][field]),
                        };
                    }
                    else {
                        finalData[table] = {
                            ...finalData[table],
                            [pattern[table][field]?.nameToSend ?? field]: ServicesUpdate.#checkDataValidationForServer(data[table][field], pattern[table][field]),
                        };
                    }
                }
            });
        });

        return finalData;
    }

    static #checkDataValidationForServer = (value, rules = {}) => {
        let finalValue = null;

        switch (rules.type.toLocaleLowerCase()) {
            case "numeric":
                finalValue = `${value}`.length < `${rules.max}`.length ? `${value}`.padStart(`${rules.max}`.length, "0") : value;
                break;
            default:
                finalValue = value;
                break;
        }

        if (rules?.addMinusBeforeSend) {
            finalValue = "-" + finalValue;
        }
        else if (rules?.addPlusBeforeSend) {
            finalValue = "+" + finalValue;
        }

        return finalValue;
    }
}
