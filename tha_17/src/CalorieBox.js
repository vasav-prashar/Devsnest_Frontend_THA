import React from 'react';
import "./app.css"

function CalorieBox(props){
    return(
        <div className="box">
            <div>{props.title}</div>
            <div>You have consumed {props.calories} calories today</div>
        </div>

    )
}
export default CalorieBox;