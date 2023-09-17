const backhead = document.querySelector(".backhead");
// console.log(backhead);
const backselect = document.querySelector(".backselect");
// console.log(backselect);
const arrow = document.querySelector(".backhead i");
// console.log("arrow");
const colorinput = document.querySelector(".colorinput");
// console.log(colorinput);
const bodybackground = document.querySelector(".bodybackground");
// console.log(body);



backhead.addEventListener("click",()=>{
    backselect.classList.toggle("hide");
    arrow.classList.toggle("arrow");

})
// windwo se event.target wo deta hai jis html tag pe click kar rahey ho
window.addEventListener("click",(event)=>{
    
    if(event.target == bodybackground){
        // console.log(event.target)
        backselect.classList.add("hide");
        arrow.classList.remove("arrow");
        // console.log(event.target)
       
    }

})

colorinput.addEventListener("input",()=>{
    bodybackground.style.background=colorinput.value;
})

