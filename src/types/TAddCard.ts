import {Dispatch, SetStateAction} from "react";

export interface IAddCardProps {
    setButtonState: Dispatch<SetStateAction<boolean>>;
    disabled?:boolean;
}