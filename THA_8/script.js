let abc=document.getElementsByClassName("box");
Array.prototype.forEach.call(abc,(el)=>{
    el.addEventListener('click', (event)=>{
      //2.1 Toggle Class
      el.classList.toggle('active');
    })
  });