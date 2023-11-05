import plus from "../../assets/add-card.svg";
import style from "./style.module.scss"
import {FunctionComponent, ReactElement} from "react";
import {IAddCardProps} from "../../types/TAddCard.ts";

const AddCard:FunctionComponent<IAddCardProps> = ({ setButtonState, disabled }) : ReactElement => {

    const handleClick = () => {
        setButtonState(prevState => !prevState)
    }

    return(
        <>
            <button
                className={style.addCard}
                onClick={handleClick}
                disabled={disabled}
                style={disabled ? {cursor:"not-allowed"} :  {cursor:"pointer"} }
            >
                <img src={plus} />
                <span className={style.addCard_text}>AddCard</span>
            </button>
        </>
    )
}

export default AddCard