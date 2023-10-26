const add = document.querySelector(".addbtn");
console.log(add);
const ticketbox = document.querySelector(".ticketbox")
const mainticketcontainer = document.querySelector(".mainticketcontainer");
const textarea = document.querySelector(".textarea")

let flag = false;
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


//ticket creator function

const createTicket = ()=>{
    const ticketcont = document.createElement("div");
    ticketcont.setAttribute("class","ticket-cont");
    ticketcont.innerHTML =`
    <div class="maincontain">
    <div class="ticketcolor"></div>
    <div class="tastid">Task_Id:T-1</div>
    <div class="task"></div>
   </div>
    `
    mainticketcontainer.append(ticketcont)

}

ticketbox.addEventListener("keydown",(e)=>{
     let key = e.key; //this give key which press

     if(key === "Shift"){
        createTicket();
        ticketbox.style.display="none"
        flag = false;
        textarea.value="";
     }
})