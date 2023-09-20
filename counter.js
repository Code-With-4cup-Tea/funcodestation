const inc = document.querySelector(".inc");

const dec = document.querySelector(".dec");
const res = document.querySelector(".res");
const h1 = document.querySelector(".h1");

var count = 1;

inc.addEventListener("click",()=>{
    h1.innerHTML=++count;
    console.log(count)
})


dec.addEventListener("click",()=>{
    h1.innerHTML=--count;
    console.log(count)
})


res.addEventListener("click",()=>{
        count = 1;
     h1.innerHTML=count;
    
})