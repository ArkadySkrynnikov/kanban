import {ITask} from "./TTask.ts";
import {Dispatch, SetStateAction} from "react";

export interface IMainProps {
    backlogTasks: ITask[];
    setBacklogTasks: Dispatch<SetStateAction<ITask[]>>;
    readyTasks: ITask[];
    setReadyTasks: Dispatch<SetStateAction<ITask[]>>;
    inProgressTasks: ITask[];
    setInProgressTasks: Dispatch<SetStateAction<ITask[]>>;
    finishedTasks: ITask[];
    setFinishedTasks: Dispatch<SetStateAction<ITask[]>>;
}