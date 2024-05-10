import {useState} from "react";

export const useToggle = (defaultValue:boolean) => {

    const [value, setValue] = useState<boolean>(defaultValue)
    function toggleValue(valueState:boolean) {
        setValue(prevValue => !valueState)
    }
    return [value, toggleValue]
}
