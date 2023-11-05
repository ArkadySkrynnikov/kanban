import {ITask} from "./TTask.ts";
import {Dispatch, SetStateAction} from "react";

export interface IFinishedProps {
    inProgressTasks: ITask[];
    setInProgressTasks: Dispatch<SetStateAction<ITask[]>>;
    finishedTasks: ITask[];
    setFinishedTasks: Dispatch<SetStateAction<ITask[]>>;
}