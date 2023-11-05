import Header from "../Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.tsx";
import {FunctionComponent, ReactElement} from "react";
import {IFooterProps} from "../../types/TFooter.ts";

const Layout:FunctionComponent<IFooterProps> = ({backlogTasks, finishedTasks}):ReactElement => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer backlogTasks={backlogTasks} finishedTasks={finishedTasks} />
        </>
    )
}

export default Layout