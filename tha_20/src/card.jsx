import './index.css'

const Card=(props)=>{

   
    let index=props.key1;
    return <div className="card">
        <div className="title" style={{}}>{props.title}</div>
        <div className="content">You have consumed {props.cal} calories
        <span className="deleteBtn"><button className="btn" onClick={()=>props.func(index)}>Delete</button></span></div>
    </div>
}

export default Card;
