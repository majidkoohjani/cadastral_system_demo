import Main from "./Main";

export default class ServicesUpdate
{
    static #apiBridge = new Main();

    static update = async (serviceIdentifierString = "", requestModel = null, data = {}) => {
        let url = `services/${serviceIdentifierString}`;
        let dataToSend = {};
        const {type = "", params = {}} = requestModel;

        switch (type.toLocaleLowerCase()) {
            case "inurl":
                // params.map(param => {
                //     url += `/${data[param]}`;
                // });
                break;
            case "payload":
                dataToSend = ServicesUpdate.#getDataToSend(params, data);
                break;
            default:
                break;
        }

        return this.#apiBridge.postRequest(url, dataToSend);
    }

    static #getDataToSend = (pattern = {}, data = {}) => {
        let finalData = {};
        let tables = Object.keys(pattern);

        tables.map(table => {
            let fields = Object.keys(pattern[table]);

            fields.map(field => {
                finalData[table] = {
                    ...finalData[table],
                    [pattern[table][field]?.nameToSend ?? field]: ServicesUpdate.#checkDataValidationForServer(data[table][field], pattern[table][field]),
                };
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

        return finalValue;
    }
}
