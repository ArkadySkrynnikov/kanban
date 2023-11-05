import {ReactElement, useState} from "react";
import avatar from "../../../assets/user-avatar.svg";
import Arrow from "./arrow/Arrow.tsx";
import style from "./userAvatar.module.scss";
import Modal from "./Modal/Modal.tsx";
const UserAvatar = (): ReactElement => {
    const [modalActive, setModalActive] = useState<boolean>(false)

    return (
        <>
            <div className={style.container}>
                <img alt={"avatar"} src={avatar} className={style.avatar} />
                <Arrow active={modalActive} setActive={setModalActive}/>
                <Modal active={modalActive} setActive={setModalActive}>
                    <div className={style.modal_container}>
                        <span className={style.modal_item}>Profile</span>
                        <span className={style.modal_item}>Log Out</span>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default UserAvatar;
