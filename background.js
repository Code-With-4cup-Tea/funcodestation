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
    const background = colorinput.value;
    // bodybackground.style.background=colorinput.value;
    bodybackground.style.background=background;

    localStorage.setItem("setbackgroundcolor",background);

})



//nichay check hoga yadi local storage main koi value hai to if block chlega phir background color bhi change kareyga
//or input color box ki value bhi set kar dega same color

const checkcolorandget = ()=>{
    const getbackgroundcolor = localStorage.getItem("setbackgroundcolor");

    if(getbackgroundcolor){
        bodybackground.style.background=getbackgroundcolor;
        colorinput.value=getbackgroundcolor;
    }

}

checkcolorandget();

