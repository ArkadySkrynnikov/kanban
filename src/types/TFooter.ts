import {ITask} from "./TTask.ts";

export interface IFooterProps {
    backlogTasks: ITask[];
    finishedTasks: ITask[];
}