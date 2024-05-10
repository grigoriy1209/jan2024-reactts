import {useRef} from "react";

export const usePrevious =<T,>(value:T):T | undefined=>{
    const currentRef = useRef<T>(value);
    const previousRef = useRef<T | undefined>();

    if(currentRef.current !==value){
       previousRef.current = currentRef.current;
    }
  return previousRef.current;
}
usePrevious<number>(1000)