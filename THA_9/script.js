var total = 36;
var taken = 0;
const box = document.getElementsByClassName('book');
var rs=document.querySelector(".total");
var bs=document.querySelector(".bookedseats");
rs.innerHTML=total;
bs.innerHTML=taken;

Array.prototype.forEach.call(box, (el)=>{
    el.addEventListener('click', (event)=>{


        if(el.classList.contains('active'))
        {
            taken -=1;
            el.classList.remove('active');
            rs.innerHTML ="BOOKED SEATS: "+ total-taken; 
            bs.innerHTML ="TAKEN : "+ taken; 
        }

        else{
            taken +=1;
            el.classList.add('active');
            bs.innerHTML ="BOOKED SEATS:"+ total-taken; 
            bs.innerHTML ="TAKEN :"+ taken;
        }

    })

});