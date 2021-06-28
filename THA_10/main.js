// let words=["Groot", "Knshika", "Divine", "BigO", "Haddi", "Sherl", "KayDee", "Shunya"];
// words=[...words, ...words];
// let moves=30;
// let matches=0;
// let gameActive=true;

// for(let i=1; i<=16; i++){
    
//     let rand=Math.floor(Math.random()*(16-i));
//     let back=document.getElementsByClassName("back")
//     back.innerHTML="<h2>"+words[rand]+"</h2>";
//     words.splice(rand, 1);

    
   
// }

// let clicked=0;
// let cards=document.getElementsByClassName("card");

// for(let card of cards){

//     card.addEventListener("click", (e)=>{
//         // if(!gameActive)return;
//         // moves--;
//         // // document.querySelector("").innerHTML=moves;
//         if(card.className=="card"){
//             clicked++;
//             console.log(clicked);
//         }
        
//         if(clicked>0&&clicked<=2){
//             card.classList.add("flipped");
            
//         }
//         if(card.className!="card flipped"){
//         if(clicked>=2){
//             console.log(clicked);
//             for(card of cards){
//             card.classList.remove("flipped");
//             card.classList.add("backflipped");
//             } 

//         }
//         clicked=0;
//     }
        
//     })
// }
var card=document.getElementsByClassName("flip-card-front");
var inner=document.getElementsByClassName("flip-card-inner")
for(let i=0;i<card.length;i++)
{
    card[i].val=i+1;
    inner[i].val=i+1;
    inner[i].classList.add("unflip");
    card[i].addEventListener("click",(e)=>{
        console.log(e.target);
        if(inner[e.target.val-1].classList.contains("unflip")){
            inner[e.target.val-1].style.transform="rotateY(180deg)";
            inner[e.target.val-1].classList.add("flipped");
            inner[e.target.val-1].classList.remove("unflip");
        }
        
        if(inner[e.target.val-1].classList.contains("flipped")){
            inner[e.target.val-1].classList.add("unflip");
            inner[e.target.val-1].classList.remove("flipped");
        }

    })
}           