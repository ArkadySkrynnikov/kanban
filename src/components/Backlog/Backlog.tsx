import {FunctionComponent, ReactElement, useState} from "react";
import style from "./style.module.scss"
import AddCard from "../AddCard/AddCard.tsx";
import Submit from "../Submit/Submit.tsx";
import Input from "../Input/Input.tsx";
import {IBacklogProps} from "../../types/TBacklog.ts";
import { v4 as uuid } from "uuid"
import TaskList from "../Tasks/TaskList.tsx";

const Backlog: FunctionComponent<IBacklogProps> = ({ backlogTasks, setBacklogTasks }) : ReactElement => {
    const [buttonState, setButtonState] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const addBacklogTask = () => {
        if(inputValue && inputValue.trim()){
            setBacklogTasks([...backlogTasks,{
                id: uuid(),
                status:"Backlog",
                label: inputValue,
                description: "This task has no description",
            }])
        }
        setInputValue("");
    }

    return(
        <>
            <div className={style.backlog_container}>
                <span className={style.backlog_title}>Backlog</span>
                <div className={style.backlog_taskList__container}>
                    <TaskList tasks={backlogTasks}/>
                        {
                            buttonState
                            &&
                            <div className={style.input_position}>
                                <Input
                                    inputValue={inputValue}
                                    setInputValue={setInputValue}
                                    addBacklogTask={addBacklogTask}
                                    setButtonState={setButtonState}
                                />
                            </div>
                        }
                </div>
                <div className={style.backlog_activeElements_container}>
                    <div className={style.button_position}>
                        {
                            buttonState
                                ?
                            <Submit
                                setButtonState={setButtonState}
                                addBacklogTask={addBacklogTask}
                            />
                                :
                            <AddCard
                                setButtonState={setButtonState}
                                disabled={false}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Backlog