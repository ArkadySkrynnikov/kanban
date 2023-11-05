import {ITask} from "./TTask.ts";
import {Dispatch, SetStateAction} from "react";

export default interface IEditPageProps {
    backlogTasks: ITask[];
    readyTasks: ITask[];
    inProgressTasks: ITask[];
    finishedTasks: ITask[];
    setBacklogDescriptionState:Dispatch<SetStateAction<string>>;
    setReadyDescriptionState:Dispatch<SetStateAction<string>>;
    setInProgressDescriptionState:Dispatch<SetStateAction<string>>;
    setFinishedDescriptionState:Dispatch<SetStateAction<string>>;
}