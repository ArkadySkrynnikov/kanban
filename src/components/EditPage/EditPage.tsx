import React, {FunctionComponent, ReactElement, useState} from "react";
import style from "./style.module.scss"
import IEditPageProps from "../../types/TEditPage.ts";
import {Link, useParams} from "react-router-dom";


const EditPage: FunctionComponent<IEditPageProps> = ({
        backlogTasks,
        inProgressTasks,
        readyTasks,
        finishedTasks,
        setBacklogDescriptionState,
        setReadyDescriptionState,
        setInProgressDescriptionState,
        setFinishedDescriptionState
    }): ReactElement => {
    const [state, setState] = useState(false)

    const {pageId} = useParams();

    const arrOfTasks = [...backlogTasks, ...readyTasks, ...inProgressTasks, ...finishedTasks]

    const currentTask = arrOfTasks.find((e)=>e.id === pageId);

    const [textAreaState, setTextAreaState] = useState(currentTask!.description)

    const handleClickDescription: React.MouseEventHandler<HTMLDivElement> = () => {
        setState(prevState => !prevState)
    }

    const handleClickSave:  React.MouseEventHandler<HTMLButtonElement> = () => {
        if(currentTask!.status === "Backlog"){
            setState(prevState => !prevState)
            const currentTaskIndex = backlogTasks.findIndex((e)=> e.id === pageId);
            backlogTasks[currentTaskIndex].description = textAreaState
            setBacklogDescriptionState(backlogTasks[currentTaskIndex].description)
            console.log(backlogTasks)
        } else if(currentTask!.status === "Ready"){
            setState(prevState => !prevState)
            const currentTaskIndex = readyTasks.findIndex((e)=> e.id === pageId);
            readyTasks[currentTaskIndex].description = textAreaState;
            setReadyDescriptionState(readyTasks[currentTaskIndex].description)
        } else if(currentTask!.status === "InProgress"){
            setState(prevState => !prevState)
            const currentTaskIndex = inProgressTasks.findIndex((e)=> e.id === pageId);
            inProgressTasks[currentTaskIndex].description = textAreaState;
            setInProgressDescriptionState(inProgressTasks[currentTaskIndex].description)
        } else if(currentTask!.status === "Finished"){
            setState(prevState => !prevState)
            const currentTaskIndex = finishedTasks.findIndex((e)=> e.id === pageId);
            finishedTasks[currentTaskIndex].description = textAreaState;
            setFinishedDescriptionState(finishedTasks[currentTaskIndex].description)
        }
    }

    return (
        <>
            <div className={style.editPage}>
                <div className={style.editPage_container}>
                    <Link className={style.editPage_X} to={"/"}>X</Link>
                    <div className={style.editPage_title_container}>
                        <span className={style.editPage_title}>{currentTask!.label}</span>
                    </div>
                    {
                        state
                            ?
                        <div className={style.text_area_container}>
                            <textarea
                                value={textAreaState}
                                className={style.text_area}
                                onChange={(e)=>{setTextAreaState(e.target.value)}}
                            >
                            </textarea>
                            <button
                                className={style.text_area_button}
                                onClick={handleClickSave}
                            >
                                Save
                            </button>
                        </div>
                            :
                        <div className={style.editPage_description} onClick={handleClickDescription}>
                            {textAreaState}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default EditPage