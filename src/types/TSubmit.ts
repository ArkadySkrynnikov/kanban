import {Dispatch, SetStateAction} from "react";

export interface ISubmitProps{
    setButtonState: Dispatch<SetStateAction<boolean>>
    addBacklogTask: () => void;
}