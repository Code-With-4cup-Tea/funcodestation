const add = document.querySelector(".addbtn");
const ticketbox = document.querySelector(".ticketbox")

let flag = false;
const arr = [];

add.addEventListener("click",(e)=>{
    //display box
    //genrate ticket
 
    //toggle true display box
    //toggle false hide display box
    flag =! flag;
 //    console.log(flag);
 
 if(flag){
     ticketbox.style.display ="flex"
 
 }else{
     ticketbox.style.display="none"
 }
 })

 