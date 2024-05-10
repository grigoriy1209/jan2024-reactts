import {useEffect, useState} from "react";


export const useStorage = (key, localStorageObj, defaultValue) => {
    const [value, setValue] = useState(()=>{
        let jsonValue = localStorageObj.getItem(key);
        if(jsonValue !==null)return JSON.parse(jsonValue);

        if(typeof defaultValue === 'function'){
            return defaultValue();
        }else {
            return defaultValue;
        }

    })
    useEffect(() => {
        if(value === undefined) return localStorageObj.removeItem(key);
        localStorageObj.setItem(key, JSON.stringify(value));
    }, [key, value,localStorageObj]);
return [value, setValue]
}// and of custom hook
useStorage('asd', 'def', window.localStorage)