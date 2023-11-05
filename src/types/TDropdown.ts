import {Dispatch, SetStateAction} from "react";
import {ITask} from "./TTask.ts";

export interface IDropdownProps {
    prevTasks: ITask[];
    setPrevTasks: Dispatch<SetStateAction<ITask[]>>;
    currentTasks: ITask[];
    setCurrentTasks: Dispatch<SetStateAction<ITask[]>>;
    status: string;
    setButtonState: Dispatch<SetStateAction<boolean>>;
}