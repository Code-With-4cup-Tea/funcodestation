const addbtn = document.querySelector(".addbtn");
const jiraBoard =document.querySelector(".jiraBoard");
// console.log(jiraBoard)
const title = document.querySelector(".title");
// console.log(title)

const todo = document.querySelector(".todo")
// console.log(todo)
//queryselectorAll give node list
const selections = document.querySelectorAll(".selections")
// console.log(selections)




//click on add button , jiraBoard display, using add eventlist

let flag = false

addbtn.addEventListener("click",()=>{

    flag = !flag;     
    // console.log(flag)
    if(flag){
        jiraBoard.style.display = "block"
    }else{
        jiraBoard.style.display ="none"
    }   
})


// when clicked on types of jeera than ticket bord title will update 
//innerText : use for access text of that tag

selections.forEach((titles,index)=>{
       titles.addEventListener("click",(e)=>{
             title.innerHTML=titles.innerText;
       })
})

// selections.addEventListener("click",()=>{
   
//     title.innerHTML="Todoss"
// })
