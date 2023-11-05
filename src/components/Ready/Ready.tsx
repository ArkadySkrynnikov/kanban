import {FunctionComponent, ReactElement, useState} from "react";
import style from "./style.module.scss"
import TaskList from "../Tasks/TaskList.tsx";
import AddCard from "../AddCard/AddCard.tsx";
import {IReadyProps} from "../../types/TReady.ts";
import Dropdowns from "../Dropdown/Dropdown.tsx";


const Ready :FunctionComponent<IReadyProps> = (
    { backlogTasks, setBacklogTasks, readyTasks, setReadyTasks }
): ReactElement => {
    const [buttonState,setButtonState] = useState(false);

    return(
        <>
            <div className={style.ready_container}>
                <span className={style.ready_title}>Ready</span>
                <div className={style.ready_taskList__container}>
                    <TaskList tasks={readyTasks}/>
                </div>
                <div className={style.ready_activeElements_container}>
                    <div className={style.button_position}>
                        {
                            buttonState
                            ?
                            <Dropdowns
                                prevTasks={backlogTasks}
                                setPrevTasks={setBacklogTasks}
                                currentTasks={readyTasks}
                                setCurrentTasks={setReadyTasks}
                                status={"Ready"}
                                setButtonState={setButtonState}
                            />
                            :
                            <AddCard
                                disabled={backlogTasks.length ? false : true}
                                setButtonState={setButtonState}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ready