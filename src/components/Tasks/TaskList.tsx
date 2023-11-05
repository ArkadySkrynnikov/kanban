import {FunctionComponent, ReactElement} from "react";
import {ITaskListProps} from "../../types/TTaskList.ts";
import OneTask from "./OneTask.tsx";

const TaskList:FunctionComponent<ITaskListProps> = ({tasks}): ReactElement => {
    return (
        <>
            {tasks.map((task)=>
                <OneTask
                    key={task.id}
                    id={task.id}
                    status={task.status}
                    label={task.label}
                    description={task.description}
                />
            )}
        </>
    )
}

export default TaskList;