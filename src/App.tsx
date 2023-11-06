import "./index.scss"
import Main from "./components/Main/Main.tsx";
import { useEffect, useState } from "react";
import {ITask} from "./types/TTask.ts";
import {Route, Routes} from "react-router-dom";
import EditPage from "./components/EditPage/EditPage.tsx";
import Layout from "./components/Layout/Layout.tsx";

function App() {

    const [backlogTasks, setBacklogTasks] = useState<ITask[]>(() => {
        return JSON.parse(localStorage.getItem('Backlog')!) || []
    });

    const [readyTasks, setReadyTasks] = useState<ITask[]>(() => {
        return JSON.parse(localStorage.getItem('Ready')!) || []
    });

    const [inProgressTasks, setInProgressTasks] = useState<ITask[]>(() => {
        return JSON.parse(localStorage.getItem('InProgress')!) || []
    });

    const [finishedTasks, setFinishedTasks] = useState<ITask[]>(() => {
        return JSON.parse(localStorage.getItem('Finished')!) || []
    });

    const [backlogDescriptionState, setBacklogDescriptionState] = useState<string>("");
    const [readyDescriptionState, setReadyDescriptionState] = useState<string>("");
    const [inProgressDescriptionState, setInProgressDescriptionState] = useState<string>("");
    const [finishedDescriptionState, setFinishedDescriptionState] = useState<string>("");

    useEffect(()=> {
        localStorage.setItem('Backlog', JSON.stringify(backlogTasks))
    }, [backlogTasks, backlogDescriptionState]);

    useEffect(()=> {
        localStorage.setItem('Ready', JSON.stringify(readyTasks))
    }, [readyTasks, readyDescriptionState]);

    useEffect(()=> {
        localStorage.setItem('InProgress', JSON.stringify(inProgressTasks))
    }, [inProgressTasks, inProgressDescriptionState]);

    useEffect(()=> {
        localStorage.setItem('Finished', JSON.stringify(finishedTasks))
    }, [finishedTasks, finishedDescriptionState]);

    return (
        <>
                <Routes>
                    <Route path="/" element={<Layout backlogTasks={backlogTasks} finishedTasks={finishedTasks }/>}>
                        <Route index element={
                            <Main
                                backlogTasks={backlogTasks}
                                setBacklogTasks={setBacklogTasks}

                                readyTasks={readyTasks}
                                setReadyTasks={setReadyTasks}

                                inProgressTasks={inProgressTasks}
                                setInProgressTasks={setInProgressTasks}

                                finishedTasks={finishedTasks}
                                setFinishedTasks={setFinishedTasks}
                            />
                        }/>
                        <Route path={"/task/:pageId"} element={
                            <EditPage
                                setBacklogDescriptionState={setBacklogDescriptionState}
                                setReadyDescriptionState={setReadyDescriptionState}
                                setInProgressDescriptionState={setInProgressDescriptionState}
                                setFinishedDescriptionState={setFinishedDescriptionState}

                                backlogTasks={backlogTasks}
                                readyTasks={readyTasks}
                                inProgressTasks={inProgressTasks}
                                finishedTasks={finishedTasks}
                            />
                        }/>
                    </Route>
                </Routes>
        </>
    )
}

export default App
