const backhead = document.querySelector(".backhead");
// console.log(backhead);
const backselect = document.querySelector(".backselect");
// console.log(backselect);
const arrow = document.querySelector(".backhead i");
// console.log("arrow");


backhead.addEventListener("click",()=>{
    backselect.classList.toggle("hide");
    arrow.classList.toggle("arrow");
})

