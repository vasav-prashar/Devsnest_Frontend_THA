import { useState } from "react";

const AddTodo=()=>{
    const [item,setItem]=useState("");
    return (
        <div>
            <h2>ADD TODO</h2>
            <input type="text" placeholder="ADD A TODO" value={item}
           onChange={(e)=> setItem(e.target.value)}/>
            <button onClick={()=>{

            }}>ADD</button>
        </div>

    )
}
export default AddTodo;