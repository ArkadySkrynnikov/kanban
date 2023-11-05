import {ITask} from "./TTask.ts";
import {Dispatch, SetStateAction} from "react";

export interface IBacklogProps{
    backlogTasks: ITask[];
    setBacklogTasks: Dispatch<SetStateAction<ITask[]>>;
}