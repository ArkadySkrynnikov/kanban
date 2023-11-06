import { ReactElement } from "react";
import style from "./header.module.scss";
import UserAvatar from "./userAvatar/userAvatar.tsx";

function Header(): ReactElement {
    return (
        <>
            <header className={style.header_container}>
                <div className={style.header_container__content}>
                    <span className={style.header_logo}>Awesome Kanban Board</span>
                    <button onClick={()=>localStorage.clear()}>Clear</button>
                    <UserAvatar />
                </div>
            </header>
        </>
    );
}

export default Header;
