function FoodCard(props){
  return(
  <div className="foodCard">
     <div className="Foodtitle">
       
     </div>

     <div className="Calorie">
           {props.cal}
      </div>

  </div>
  )
}
export default FoodCard;
