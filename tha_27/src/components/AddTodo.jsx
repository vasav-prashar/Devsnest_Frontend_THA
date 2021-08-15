import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";

const AddTodo=()=>{
    const [item,setItem]=useState("");
    const dispatch=useDispatch()
    return (
        <div>
            <h2>ADD TODO</h2>
            <input type="text" placeholder="ADD A TODO" value={item}
           onChange={(e)=> setItem(e.target.value)}/>
            <button onClick={()=>{
                dispatch(addItem({
                    title:item,
                    done:false,
                }))
                setItem("")
            }}>ADD</button>
        </div>

    )
}
export default AddTodo;