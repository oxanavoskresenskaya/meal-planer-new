import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export const MyMeal = ({text, updatingInInput, deleteMyMeal}) => {
    return (
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}></AiFillEdit>
            <AiFillDelete onClick={deleteMyMeal}></AiFillDelete>
        </div>
    )
}