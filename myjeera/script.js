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

// this is top button class area
const selection = document.querySelectorAll(".selection")



let titleUpdateText ="Todo";
//click on add button , jiraBoard display, using add eventlist

//this array for change ticket title after create ticket 
let selectTitle = ["Todo","In Progress","In Review","Done"];
let titleId = 1;
console.log("titleid",titleId)
let ticketTitleTag = selectTitle[titleId]


let flag = false

let lock = "fa-lock";
let unlock = "fa-lock-open"

let dataArray = [];
console.log("hello",dataArray)

if (localStorage.getItem("jeera")) {
    //     //retrive and display data
        dataArray = JSON.parse(localStorage.getItem("jeera"));
       
        dataArray.forEach((ticketsObj)=>{
            // console.log(ticketsObj)
            createTicket(ticketsObj.titleUpdateText,ticketsObj.textareaValue,ticketsObj.unique)
        })
    }


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
             if(titleUpdateText == "Todo"){
                titleId =0;
             }else if(titleUpdateText == "In Progress"){
                titleId=1;
             }else if(titleUpdateText == "In Review"){
                    titleId =2;
             }else{
                titleId = 3;
             }
             console.log("title in clinkc" ,titleId)
       })
})


// for ticket create when press shift ticket will create

function createTicket(titleUpdateText,textareaValue,unique) {
         
       let uniques = unique || uniqueId()

       const ticketContain = document.createElement("div"); //for ticket create first create element
    //    console.log("before",dataArray)
       
    //    console.log("after",dataArray)

    

       ticketContain.setAttribute("class","ticket-create"); //after create element setAttribute by giving class name

       //after set attribute we need to add inner html
       ticketContain.innerHTML=`
       <div class="ticket">
       <div class="ticket-title">
       ${
        titleUpdateText ? titleUpdateText : "Todo"
    }
       </div>
       <div class="ticket-id">Ticket-Id:${uniques}</div>
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
      //*****************for local storage set item  ******************************************
     //***************************************************************************************
       if(!unique){
      
     dataArray.push({titleUpdateText,textareaValue,unique:uniques});
     localStorage.setItem("jeera",JSON.stringify(dataArray));


  
       }
//*****************local storage block end  ******************************************
   //***************************************************************************************


       lockUnlockHandle(ticketContain,uniques);
       removeTicket(ticketContain,uniques);
       titleChange(ticketContain,uniques)
}


//for keyup value and create ticket function value passed

jiraBoard.addEventListener("keyup",(e)=>{
         let key = e.key; //this give which key press

         if(key === "Shift"){
                    
                    createTicket(titleUpdateText,textarea.value);
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

function lockUnlockHandle(ticketContain,uniques){
         
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
            // for update text area content and store in array
            let textAreaUpdate = indexId(uniques);
            dataArray[textAreaUpdate].textareaValue = ticketAreaBox.value;
            // console.log("textarea",dataArray)
           
            //*****************for local storage set item  ******************************************
     //***************************************************************************************

           localStorage.setItem("jeera",JSON.stringify(dataArray));


       //*****************local storage block end  ******************************************
        //***************************************************************************************


        }
            
    })
} 

// for delete 

function removeTicket(ticketContain,uniques){

    const cutBtn = ticketContain.querySelector(".removebtn");
    console.log(cutBtn)

    cutBtn.addEventListener("click",()=>{
        //for delete from an array
        let deleteCart = indexId(uniques);
         //splice array main se indexnumss index wala remove kar dega , 1 use for one index remove
        dataArray.splice(deleteCart,1);

        console.log("delete",dataArray)

//**********************local storge ************************************************/
//********************************************************************************** */
        //now jo array main data baccha usay stiring main convert karo
        let stringsArr = JSON.stringify(dataArray);
        //set local storage which remain in storage
        localStorage.setItem("jeera",stringsArr);

//********************************************************************************** */
//********************************************************************************** */

        // ui se delte ho jayga
          ticketContain.remove();

    })
      
}


// title text update click on ticket title

function titleChange(ticketContain,uniques){
            let ticketTitleDiv = ticketContain.querySelector(".ticket-title");

            ticketTitleDiv.addEventListener("click",()=>{
               
                // console.log(titleUpdateIndex)
                let titleUpdateIndex = indexId(uniques);
                 
                // console.log("unque is",unique)
                    titleId++;
                    let titleIds = titleId%4;
                    // console.log(titleIds)
                    ticketTitleTag = selectTitle[titleIds]
                  ticketTitleDiv.innerText=ticketTitleTag;
                //   console.log("select title",selectTitle[titleIds])
                //   console.log("title",ticketTitleTag)

              
                    dataArray[titleUpdateIndex].titleUpdateText = selectTitle[titleIds]
                    // console.log("click ek badd ",dataArray)
             
                //  console.log("in change",titleIds);
             
               //*****************for local storage set item  ******************************************
     //***************************************************************************************

       localStorage.setItem("jeera",JSON.stringify(dataArray));


       //*****************local storage block end  ******************************************
        //***************************************************************************************

            })
}



//findig id of id of ticket
function indexId (uniques){
   
      let fetchIndex = dataArray.findIndex((objectss)=>{
        // console.log("objexts",objectss)
           
           return objectss.unique == uniques
      })
      console.log(fetchIndex)
   return fetchIndex;

}

// filter data 


selection.forEach((toptitles,index)=>{
   toptitles.addEventListener("click",(e)=>{
        let text = toptitles.innerText
    let retruns =  dataArray.filter((current)=>(
                    // console.log("current",current.titleUpdateText)
                    current.titleUpdateText === text
    ))
              
      let allticketcontainer = document.querySelectorAll(".ticket-create")
        for(let i=0; i<allticketcontainer.length;i++){
            allticketcontainer[i].remove();
        }
       retruns.forEach((ticketsObj)=>{
            // console.log(ticketsObj)
            createTicket(ticketsObj.titleUpdateText,ticketsObj.textareaValue,ticketsObj.unique)
        })
    
    
    })
})


// selections.forEach((titles,index)=>{
//     titles.addEventListener("click",(e)=>{
//           title.innerHTML=titles.innerText;
//           titleUpdateText = titles.innerText;
//           console.log(titleUpdateText)
//           if(titleUpdateText == "Todo"){
//              titleId =0;
//           }else if(titleUpdateText == "In Progress"){
//              titleId=1;
//           }else if(titleUpdateText == "In Review"){
//                  titleId =2;
//           }else{
//              titleId = 3;
//           }
//           console.log("title in clinkc" ,titleId)
//     })
// })