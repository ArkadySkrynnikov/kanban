import {FunctionComponent, ReactElement} from "react";
import style from "./main.module.scss"
import Backlog from "../Backlog/Backlog.tsx";
import {IMainProps} from "../../types/TMain.ts";
import InProgress from "../InProgress/InProgress.tsx";
import Ready from "../Ready/Ready.tsx";
import Finished from "../Finished/Finished.tsx";

const Main:FunctionComponent<IMainProps> = (
    { backlogTasks,setBacklogTasks, readyTasks, setReadyTasks, inProgressTasks , setInProgressTasks, finishedTasks, setFinishedTasks }
): ReactElement =>{

    return(
        <>
            <main className={style.main}>
                <div className={style.main_container}>
                    <Backlog
                        backlogTasks={backlogTasks}
                        setBacklogTasks={setBacklogTasks}
                    />
                    <Ready
                        backlogTasks={backlogTasks}
                        setBacklogTasks={setBacklogTasks}
                        readyTasks={readyTasks}
                        setReadyTasks={setReadyTasks}
                    />
                    <InProgress
                        readyTasks={readyTasks}
                        setReadyTasks={setReadyTasks}
                        inProgressTasks={inProgressTasks}
                        setInProgressTasks={setInProgressTasks}
                    />
                    <Finished
                        finishedTasks={finishedTasks}
                        setFinishedTasks={setFinishedTasks}
                        inProgressTasks={inProgressTasks}
                        setInProgressTasks={setInProgressTasks}
                    />
                </div>
            </main>
        </>
    )
}

export default Main