import {FunctionComponent, ReactElement, useState} from "react";
import style from "./style.module.scss";
import AddCard from "../AddCard/AddCard.tsx";
import {IInProgressProps} from "../../types/TInProgress.ts";
import TaskList from "../Tasks/TaskList.tsx";
import Dropdowns from "../Dropdown/Dropdown.tsx";

const InProgress : FunctionComponent<IInProgressProps> = (
    {readyTasks, setReadyTasks, inProgressTasks, setInProgressTasks}
) :ReactElement => {
    const [buttonState,setButtonState] = useState(false)
    return (
        <>
            <div className={style.inProgress_container}>
                <span className={style.inProgress_title}>In Progress</span>
                <div className={style.inProgress_taskList__container}>
                    <TaskList tasks={inProgressTasks} />
                </div>
                <div className={style.inProgress_activeElements_container}>
                    <div className={style.button_position}>
                        {
                            buttonState
                                ?
                            <Dropdowns
                                prevTasks={readyTasks}
                                setPrevTasks={setReadyTasks}
                                currentTasks={inProgressTasks}
                                setCurrentTasks={setInProgressTasks}
                                status={"InProgress"}
                                setButtonState={setButtonState}
                            />
                                :
                            <AddCard
                                setButtonState={setButtonState}
                                disabled={readyTasks.length ? false : true}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default InProgress