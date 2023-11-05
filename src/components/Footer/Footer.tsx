import {FunctionComponent, ReactElement} from "react";
import style from "./style.module.scss"
import {IFooterProps} from "../../types/TFooter.ts";

const Footer: FunctionComponent<IFooterProps> = ({ backlogTasks, finishedTasks }): ReactElement => {
    return (
        <footer className={style.footer}>
            <div className={style.footer_container}>
                <div className={style.footer_info}>
                    <span className={style.footer_info__activeTasks}>Active tasks: {backlogTasks.length}</span>
                    <span className={style.footer_info__finished}>Finished tasks: {finishedTasks.length}</span>
                </div>
                <span className={style.footer_info__creator}>Kanban board by Arkady, 2023</span>
            </div>
        </footer>
    )
}

export default Footer;