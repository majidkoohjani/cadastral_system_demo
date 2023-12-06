export default class Validator
{
    validate = (valueToCheck, rules = {}) => {
        let validated = false;
        let {type = "numeric"} = rules;

        switch (type.toLocaleLowerCase()) {
            case "numeric":
                validated = this.#checkNumericValue(valueToCheck, rules?.min, rules?.max);
                break;
            case "checkbox":
                validated = true;
                break;
            default:
                break;
        }

        return validated;
    }

    validateNeededFields = (requestModel = {}, dataToSend = {}) => {
        let validated = false;

        let neededTables = Object.keys(requestModel.params).filter(item => item === "origin" || item === "destination");

        let tablesNotExist = neededTables.filter(tableName => !dataToSend.hasOwnProperty(tableName));

        if (!tablesNotExist.length) {
            neededTables.forEach(tableName => {
                let neededFields = Object.keys(requestModel.params[tableName]);

                let fieldsNotExist = neededFields.filter(fieldName => !dataToSend[tableName].hasOwnProperty(fieldName));

                if (!fieldsNotExist.length) {
                    validated = true;
                }
            });

            if (validated) {
                validated = this.#validateParities({...requestModel.params}, {...dataToSend});
            }
        }

        return validated;
    }

    #validateParities = (params = {}, data = {}) => {
        let result = true;

        let tables = Object.keys(params).filter(item => item === "origin" || item === "destination");

        tables.forEach(table => {
            let tablesFields = Object.keys(params[table]);
            let oppositeTable = tables.find(tableName => tableName !== table);

            tablesFields.forEach(field => {
                if (params[table][field].hasOwnProperty("parityCondition")) {
                    result = data[table][params[table][field]["parityCondition"]] === data[oppositeTable][params[table][field]["parityCondition"]];
                }
            })
        });

        return result;
    }

    #checkNumericValue = (valueToCheck, min = null, max = null) => {
        min = min ?? 1;
        max = max ?? 9999;

        if (valueToCheck) {
            let tempValue = `${valueToCheck}`;

            if (/^\d+$/.test(tempValue)) {
                let tempValueNumeric = +tempValue;

                if (tempValueNumeric >= +min && tempValueNumeric <= +max) {
                    return true;
                }
            }
        }

        return false;
    }

    #onlyNumbersAllowed = (valueToCheck) => {
        return /^\d+$/.test(`${valueToCheck}`);
    }
}