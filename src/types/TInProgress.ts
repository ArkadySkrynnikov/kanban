import {ITask} from "./TTask.ts";
import {Dispatch, SetStateAction} from "react";

export interface IInProgressProps {
    readyTasks: ITask[];
    setReadyTasks: Dispatch<SetStateAction<ITask[]>>;
    inProgressTasks: ITask[];
    setInProgressTasks: Dispatch<SetStateAction<ITask[]>>;
}