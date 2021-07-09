import React from 'react';
import './App.css';
import CalorieBox from './CalorieBox';

const calorieArr=[
    {
        title:"Pizza",
        calories:55
    },
    {
        title:"coke",
        calories:55
    
    },
    {
        title:"momos",
        calories:400
    },
    {
        title:"pav bhaji",
        calories:300
    }

];

function CaloriePage(){
    return(
        <div className="page">
            <div className="container"></div>
        </div>
        <div className="container">
            {calorieArr.map(element=>{
                <CalorieBox title={element.title} calories={element.calories}/>

            })}
        </div>
    );
}
export default CaloriePage;