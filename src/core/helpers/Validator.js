export default class Validator
{
    validate = (valueToCheck, rules = {}) => {
        let validated = false;
        let {type = "numeric"} = rules;

        switch (type.toLocaleLowerCase()) {
            case "numeric":
                validated = this.#checkNumericValue(valueToCheck, rules?.min, rules?.max);
                break;
            default:
                break;
        }

        return validated;
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