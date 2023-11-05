import style from "./style.module.scss"
import React, {ChangeEventHandler, FunctionComponent, ReactElement, useEffect, useRef} from "react";
import {IInputProps} from "../../types/TInput.ts";

const Input: FunctionComponent<IInputProps> = ({ inputValue, setInputValue, addBacklogTask, setButtonState }): ReactElement => {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if(event.key === "Enter"){
            addBacklogTask();
            setButtonState(prevState => !prevState)
        }
    }

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    },[])

    return(
        <>
            <input
                onKeyDown={handleKeyDown}
                ref={inputRef}
                value={inputValue}
                onChange={handleChange}
                className={style.input}
            />
        </>
    )
}

export default Input