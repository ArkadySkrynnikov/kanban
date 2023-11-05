import {Dispatch, SetStateAction} from "react";

export interface IInputProps {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    addBacklogTask: () => void;
    setButtonState: Dispatch<SetStateAction<boolean>>;
}