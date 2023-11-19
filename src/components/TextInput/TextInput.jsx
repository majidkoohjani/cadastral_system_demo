import { useState } from "react";

export default function TextInput(props) {
    const { placeholder = "", type = "text", name= "", autoFocus = false, onChange = () => {}, value = "", config = {} } = props;
    
    const [inputValue, setInputValue] = useState(value);

    const changeHandler = (event) => {
        if (event.target.getAttribute("type") === "number") {
            let minValue = event.target?.getAttribute("min") ?? 0;
            let maxValue = event.target?.getAttribute("max") ?? 0;

            if (+event.target.value > maxValue || +event.target.value < minValue) {
                return;
            } 
        }

        setInputValue(event.target.value);
        
        onChange({
            fieldName: event.target.name,
            fieldValue: event.target.value
        });
    }


    return (
        <input className="form-control" name={name} type={type} placeholder={placeholder} value={inputValue} autoFocus={autoFocus} onChange={changeHandler} {...config} />
    );
}
