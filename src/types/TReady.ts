import {ITask} from "./TTask.ts";
import {Dispatch, SetStateAction} from "react";

export interface IReadyProps {
    backlogTasks: ITask[];
    setBacklogTasks: Dispatch<SetStateAction<ITask[]>>;
    readyTasks: ITask[];
    setReadyTasks: Dispatch<SetStateAction<ITask[]>>;
}