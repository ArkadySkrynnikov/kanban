import {FunctionComponent} from "react";
import style from "./style.module.scss";
import {ISubmitProps} from "../../types/TSubmit.ts";


const Submit:FunctionComponent<ISubmitProps> = ({setButtonState, addBacklogTask}) => {
    const handleClick = () => {
        setButtonState(prevState => !prevState)
        addBacklogTask();
    }

    return(
        <>
            <button className={style.submit} onClick={handleClick} type={"submit"}>
                <span className={style.submit_text}>Submit</span>
            </button>
        </>
    )
}

export default Submit