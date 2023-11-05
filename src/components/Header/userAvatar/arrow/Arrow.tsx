import {ReactElement} from "react";
import arrowDown from "../../../../assets/arrow-down.svg"
import arrowUp from "../../../../assets/arrow-up.svg"
import style from "./arrow.module.scss"
import {Imodal} from "../../../../types/Tmodal.ts";
const Arrow = ({active,setActive}:Imodal): ReactElement => {

    return(
        <>
            <img onClick={()=>setActive?.(!active)} className={style.arrow} src={active ? arrowUp : arrowDown}  />
        </>
    )
};

export default Arrow;
