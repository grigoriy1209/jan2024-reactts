import {useToggle} from "../custom-hooks/useToggle";
import {Component} from "react";

const ToggleComponent = () => {
    const [value, toggleValue] = useToggle(false);
    console.log(value)
    console.log(toggleValue)
    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick= {toggleValue}>Toggle</button>
            <button onClick={()=>toggleValue(true)}>true</button>
            <button onClick={()=> toggleValue(false)}>false</button>
        </div>
    );
};

export {ToggleComponent};