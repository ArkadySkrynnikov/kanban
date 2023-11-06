import { ReactElement } from "react";
import style from "./header.module.scss";
import UserAvatar from "./userAvatar/userAvatar.tsx";
import {Link} from "react-router-dom";

function Header(): ReactElement {
    return (
        <>
            <header className={style.header_container}>
                <div className={style.header_container__content}>
                    <Link to={"/"} className={style.link}><span className={style.header_logo}>Awesome Kanban Board</span></Link>
                    {/*<button onClick={()=>localStorage.clear()}>Clear</button>*/}
                    <UserAvatar />
                </div>
            </header>
        </>
    );
}

export default Header;
