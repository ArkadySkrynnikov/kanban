import {FunctionComponent, MouseEventHandler, ReactElement, useState} from "react";
import style from "./style.module.scss"
import {IDropdownProps} from "../../types/TDropdown.ts";
import arrow from "../../assets/Vector 1.svg"

const Dropdowns : FunctionComponent<IDropdownProps> = (
    { prevTasks, setPrevTasks, currentTasks, setCurrentTasks, setButtonState, status }
) : ReactElement => {

    const removeTask = (id: string): void => {
        setPrevTasks(prevTasks.filter((task)=> task.id !== id));
    }

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        setCurrentTasks([...currentTasks,{
            id: event.currentTarget.id,
            status: status,
            label: prevTasks.find(task => task.id === event.currentTarget.id)!.label,
            description: prevTasks.find(task => task.id === event.currentTarget.id)!.description,
        }]);

        setButtonState(prevState => !prevState);

        removeTask(event.currentTarget.id);
    }

    const [dropDown,openDropDown] = useState(false)

    const handleSelectClick: MouseEventHandler<HTMLButtonElement> = () => {
        openDropDown(prevState => !prevState)
    }

    return(
        <>
            <div className={style.dropdown}>
                <button className={style.button} onClick={handleSelectClick}>
                    <img src={arrow} alt={arrow}/>
                </button>
                <div className={style.dropdown_content} style={dropDown ? {display: "block"} : {display:"none"} }>
                 {prevTasks.map((task) =>
                     <a key={task.id} id={task.id} className={style.dropdown_a} onClick={handleClick}>
                         {task.label}
                     </a>)}
                </div>
            </div>
        </>
    )
}

export default Dropdowns
