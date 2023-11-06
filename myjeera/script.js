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

// this import for apend html ticket box using javascsript
const ticketContainer = document.querySelector(".ticket-container")

//this is textarea of big blcok(jeera borad)
const textarea = document.querySelector(".textarea")



let titleUpdateText ="";
//click on add button , jiraBoard display, using add eventlist

//this array for change ticket title after create ticket 
let selectTitle = ["Todo","In Progress","In Review","Done"];
let titleId = 0;


let flag = false

let lock = "fa-lock";
let unlock = "fa-lock-open"

let dataArray = [];


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
             titleUpdateText = titles.innerText;
             console.log(titleUpdateText)
             
       })
})


// for ticket create when press shift ticket will create

function createTicket(titleUpdateText,unique,textareaValue) {
    
       const ticketContain = document.createElement("div"); //for ticket create first create element
       
       dataArray.push({titleUpdateText,unique,textareaValue});
       console.log(dataArray)

       ticketContain.setAttribute("class","ticket-create"); //after create element setAttribute by giving class name

       //after set attribute we need to add inner html
       ticketContain.innerHTML=`
       <div class="ticket">
       <div class="ticket-title">
       ${
        titleUpdateText ? titleUpdateText : "Todo"
    }
       </div>
       <div class="ticket-id">Ticket-Id:${unique}</div>
       <div class="ticket-textbox">
           <textarea class="ticketTextarea" value="" placeholder="Write Task...........">${textareaValue}
           </textarea>
       </div>
       <div class="lockremove">
         <div class="ticket-lock">
               <i class="fa-solid fa-lock"></i>
           </div>
           <div class="removebtn">
               <i class="fa-solid fa-xmark fa-fade" style="color: #ff0000;"></i>
           </div>
       </div>
      </div>
       
       `
       //after push html code now need to apend in partucular so import
       ticketContainer.append(ticketContain);

       lockUnlockHandle(ticketContain);
       removeTicket(ticketContain);
       titleChange(ticketContain,unique)
}


//for keyup value and create ticket function value passed

jiraBoard.addEventListener("keyup",(e)=>{
         let key = e.key; //this give which key press

         if(key === "Shift"){
                    
                    createTicket(titleUpdateText,uniqueId(),textarea.value);
                    jiraBoard.style.display ="none"
                    flag=false;
                    textarea.value="";
                    
         }
})

// unique id genrator

function uniqueId (){
    return Math.floor(Math.random() * 100)
}


//for lock or unlock 

function lockUnlockHandle(ticketContain){
         
    let lockDiv =  ticketContain.querySelector(".ticket-lock");
    let locks    =  lockDiv.querySelector(".fa-lock");
    let ticketareaDiv = ticketContain.querySelector(".ticket-textbox")
    let ticketAreaBox = ticketareaDiv.querySelector(".ticketTextarea")
    console.log(ticketAreaBox)
    ticketAreaBox.disabled =true;  // suru se hi text area edit disabled rahey
    locks.addEventListener("click",(e)=>{
        if(locks.classList.contains(lock)){
            locks.classList.remove(lock);
            locks.classList.add(unlock);

            ticketAreaBox.disabled =false; //unlock on ho to edit on ho
            
        }
        else{
            locks.classList.add(lock);
            locks.classList.remove(unlock)
            ticketAreaBox.disabled =true; // lock ho to edit off ho jaye
           
        }
            
    })
} 

// for delete 

function removeTicket(ticketContain){

    const cutBtn = ticketContain.querySelector(".removebtn");
    console.log(cutBtn)

    cutBtn.addEventListener("click",()=>{
          ticketContain.remove();
    })
      
}


// title text update click on ticket title

function titleChange(ticketContain,unique){
            let ticketTitleDiv = ticketContain.querySelector(".ticket-title");

            ticketTitleDiv.addEventListener("click",()=>{
               
                // console.log(titleUpdateIndex)
                console.log("unque is",unique)
                    titleId++;
                    let titleIds = titleId%4;
                    console.log(titleIds)
                  ticketTitleDiv.innerText=selectTitle[titleIds];
                  let titleUpdateIndex = indexId(unique);
                  dataArray[titleUpdateIndex].titleUpdateText = selectTitle[titleIds];
            })
}



//findig id of id of ticket
function indexId (unique){
   
      let fetchIndex = dataArray.findIndex((objectss)=>{
        console.log("objexts",objectss)
           
           return objectss.unique == unique
      })
      console.log(fetchIndex)
   return fetchIndex;

}

// const indexId = (taskid)=>{
//     let ticketIndex = array.findIndex((ticketObj)=>{
        
//         return ticketObj.taskid ===taskid


//     })
//     console.log("index is " ,ticketIndex)
//   return ticketIndex;
  
// }