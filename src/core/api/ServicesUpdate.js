import fun from "../constants/fun";
import Main from "./Main";

export default class ServicesUpdate
{
    static #apiBridge = new Main();

    static update = async (serviceIdentifierString = "", requestModel = null, data = {}) => {
        let url = `services/${serviceIdentifierString}`;
        let [serviceId, subServiceId] = serviceIdentifierString.split("/");
        let dataToSend = {};

        let {type = "", params = {}, requestType = "post"} = requestModel;

        switch (type.toLocaleLowerCase()) {
            case "inurl":
                let tmpUrl = "";
                [requestType, tmpUrl] = ServicesUpdate.#getInUrlFinalPath(params, data, requestType);
                url += `/${tmpUrl}`;
                break;
            case "payload":
                if(serviceId == 2 && (subServiceId == 15 || subServiceId == 18)) {
                    dataToSend = {...data};
                } else {
                    dataToSend = ServicesUpdate.#getDataToSend(params, data);
                }
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

            if (Array.isArray(data[table])) {
                let tmpFinalArray = [];
                data[table].map(record => {
                    let tmpFinalObj = {};

                    fields.map(field => {
                        if (field !== "check") {
                            if (pattern.hasOwnProperty("tableNameForPayload")) {
                                if (pattern?.multipleRowsAllowed) {
                                    if (pattern?.multipleRowsAllowed?.unordered) {
                                        tmpFinalObj = {
                                            ...tmpFinalObj,
                                            [pattern[table][field]?.nameToSend ?? field]: ServicesUpdate.#checkDataValidationForServer(record[field], pattern[table][field]),
                                        };
                                    }
                                }
                            }
                        }
                    });

                    tmpFinalArray.push(tmpFinalObj);
                });
                finalData[pattern.tableNameForPayload] = [...tmpFinalArray];
            }
            else {
                fields.map(field => {
                    if (field !== "check") {
                        if (pattern.hasOwnProperty("removeTableNameFromPayload") && pattern?.removeTableNameFromPayload === true) {
                            if (pattern?.multipleRowsAllowed) {
                                let items = Array(pattern.multipleRowsAllowed.count).fill(0);
    
                                items.map((item, index) => {
                                    let rowIDs = Object.keys(data[table]);
    
                                    rowIDs.map(rowId => {
                                        if (data[table][rowId]["this_is"] == index + 1) {
                                            finalData[`${fun[index + 1]}_row_oid`] = {
                                                ...finalData[`${fun[index + 1]}_row_oid`],
                                                [pattern[table][field]?.nameToSend ?? field]: data[table][rowId][field],
                                            };
                                        }
                                    })
                                });
                            } else {
                                finalData = {
                                    ...finalData,
                                    [pattern[table][field]?.nameToSend ?? field]: ServicesUpdate.#checkDataValidationForServer(data[table][field], pattern[table][field]),
                                };
                            }
                        }
                        else if (pattern.hasOwnProperty("tableNameForPayload")) {
                            if (pattern?.multipleRowsAllowed) {
                                if (pattern?.multipleRowsAllowed?.unordered) {
                                    data[table].map(record => {
                                        finalData[pattern.tableNameForPayload] = [
                                            ...finalData?.[pattern.tableNameForPayload] ?? [],
                                            {
                                                [pattern[table][field]?.nameToSend ?? field]: ServicesUpdate.#checkDataValidationForServer(data[table][field], pattern[table][field]),
                                            },
                                        ];
                                    });
                                } else {
                                    let items = Array(pattern.multipleRowsAllowed.count).fill(0);
        
                                    items.map((item, index) => {
                                        let rowIDs = Object.keys(data[table]);
        
                                        rowIDs.map(rowId => {
                                            if (data[table][rowId]["this_is"] == index + 1) {
                                                finalData[`${fun[index + 1]}_row_oid`] = {
                                                    ...finalData[`${fun[index + 1]}_row_oid`],
                                                    [pattern[table][field]?.nameToSend ?? field]: data[table][rowId][field],
                                                };
                                            }
                                        })
                                    });
                                }
                            } else {
                                finalData = {
                                    ...finalData,
                                    [pattern[table][field]?.nameToSend ?? field]: ServicesUpdate.#checkDataValidationForServer(data[table][field], pattern[table][field]),
                                };
                            }
                        }
                        else {
                            finalData[table] = {
                                ...finalData[table],
                                [pattern[table][field]?.nameToSend ?? field]: ServicesUpdate.#checkDataValidationForServer(data[table][field], pattern[table][field]),
                            };
                        }
                    }
                });
            }

        });

        return finalData;
    }

    static #checkDataValidationForServer = (value, rules = {}) => {
        let finalValue = null;

        switch (rules.type.toLocaleLowerCase()) {
            case "numeric":
                finalValue = `${value}`.length < `${rules.max}`.length ? `${value}`.padStart(`${rules.max}`.length, "0") : value;
                break;
            case "null":
                finalValue = null;
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
