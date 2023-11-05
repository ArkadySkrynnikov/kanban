import { ReactElement } from "react";
import style from "./modal.module.scss"
import {Imodal} from "../../../../types/Tmodal.ts";
const Modal = ({active, children}:Imodal): ReactElement =>{

    return (
        <>
            <div className={active ? style.modal : style.noModal}>
                {children}
            </div>
        </>
    )
}

export default Modal