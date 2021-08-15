import { useDispatch,useSelector } from "react-redux"
import { removeItem } from "../actions"

const ListTodo=()=>{
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todo)
    return(
        <div>
            {todos.map((todo,index)=>(
                <div>
                    <h5 style={{display: "inline-block"}}>{todo.title}</h5>
            <button
            onClick={()=>{
                dispatch(removeItem(index))
            }}>DELETE</button>
                    </div>
            ))}
           
        </div>
    )
}

export default ListTodo