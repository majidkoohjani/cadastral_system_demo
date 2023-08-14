import { useState } from "react";

export default function TextInput(props) {
    const { placeholder = "", type = "text", name= "", autoFocus = false, onChange = () => {}, value = "" } = props;
    
    const [inputValue, setInputValue] = useState(value);

    const changeHandler = (event) => {
        setInputValue(event.target.value);
        
        onChange({
            fieldName: event.target.name,
            fieldValue: event.target.value
        });
    }


    return (
        <input className="form-control" name={name} type={type} placeholder={placeholder} value={inputValue} autoFocus={autoFocus} onChange={changeHandler} />
    );
}
