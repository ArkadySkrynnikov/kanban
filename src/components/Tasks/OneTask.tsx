import {FunctionComponent} from "react";
import style from "./style.module.scss"
import { IOneTaskProps } from "../../types/TTask.ts";
import { Link } from "react-router-dom";

const OneTask : FunctionComponent<IOneTaskProps> = ({ id, label }) =>{

    return (
        <>
            <Link to={`/task/${id}`} className={style.link_component}>
                <div  key={id} className={style.task_item}>
                    <span className={style.task_item__text}>{label}</span>
                </div>
            </Link>
        </>
    )
}

export default OneTask