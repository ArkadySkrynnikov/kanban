import {FunctionComponent, ReactElement, useState} from "react";
import style from "./style.module.scss"
import AddCard from "../AddCard/AddCard.tsx";
import {IFinishedProps} from "../../types/TFinished.ts";
import TaskList from "../Tasks/TaskList.tsx";
import Dropdowns from "../Dropdown/Dropdown.tsx";


const Finished : FunctionComponent<IFinishedProps> = (
    {inProgressTasks, setInProgressTasks, finishedTasks, setFinishedTasks}
) :ReactElement => {
    const [buttonState,setButtonState] = useState(false)
    return (
        <>
            <div className={style.finished_container}>
                <span className={style.finished_title}>Finished</span>
                <div className={style.finished_taskList__container}>
                    <TaskList tasks={finishedTasks}/>
                </div>
                <div className={style.finished_activeElements_container}>
                    <div className={style.button_position}>
                        {
                            buttonState
                                ?
                            <Dropdowns
                                prevTasks={inProgressTasks}
                                setPrevTasks={setInProgressTasks}
                                currentTasks={finishedTasks}
                                setCurrentTasks={setFinishedTasks}
                                status={"Finished"}
                                setButtonState={setButtonState}
                            />
                                :
                            <AddCard
                                setButtonState={setButtonState}
                                disabled={inProgressTasks.length ? false : true}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finished