import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';
const App=()=>{
  let [card,setCard]=useState([
    {cal:"120",title:"MOMOS"},
    {cal:"120",title:"MOMOS"},
    {cal:"120",title:"MOMOS"},  
    {cal:"120",title:"MOMOS"},
    {cal:"120",title:"MOMOS"},
    
  ]);
  function deletes(i){
    const newCards=card.filter((el,index)=>index!==i);
    setCard(newCards);
  }
  return (
    <div className="container">
      {card.map((items, index) => (
        <Card
          cal={items.cal}
          title={items.title}
          key1={index}
          key={index}
          func={deletes}
        />
      ))}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


