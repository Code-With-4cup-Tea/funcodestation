
const add = document.querySelector(".addbtn");
const removebtn = document.querySelector(".removebtn")
// console.log(add);
const ticketbox = document.querySelector(".ticketbox")
const mainticketcontainer = document.querySelector(".mainticketcontainer");
const textarea = document.querySelector(".textarea")
const priorcolors = document.querySelectorAll(".pcolors")
// console.log(priorcolors)
const topcolor = document.querySelectorAll(".colors")
// console.log(topcolor)

let ticketcolorArr = [];
console.log(ticketcolorArr);

let colors = ["rgb(2, 39, 2)"," rgb(2, 85, 2)"," rgb(4, 167, 4)"," rgb(10, 235, 10)"];
let boxprioritycolor = colors[colors.length-1]
let id = 1;
let colorId = colors[id]
// console.log(colorId)
// console.log(id)


let flag = false;
let removeFlag = false;

let lock = "fa-lock";
let unlock = "fa-lock-open"


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

//for remove 
removebtn.addEventListener("click",(e)=>{
     removeFlag = !removeFlag;
     console.log(removeFlag)
})

//for priority color
priorcolors.forEach((colorvalue,index)=>{
            colorvalue.addEventListener("click",(e)=>{
                priorcolors.forEach((removeborder,index)=>{
                        removeborder.classList.remove("activeborder");
                })
                colorvalue.classList.add("activeborder")
                id = colorvalue.classList[0];
                colorId = colors[id];
                
                // console.log(id)
               
            })
})



//ticket creator function

const createTicket = (ticketcolor,taskid,task)=>{
    const ticketcont = document.createElement("div");
    ticketcont.setAttribute("class","ticket-cont");
    ticketcont.innerHTML =`
    <div class="maincontain ">
    <div class="ticketcolor" style="background-color:${ticketcolor};"></div>
    <div class="taskid">Task_Id:#${taskid}</div>
    <div class="task">${task}</div>
    <div class="lock"><i class="fa-solid fa-lock"></i></div>
   </div>
    `
    ticketcolorArr.push(ticketcolor,taskid,task);
   

    mainticketcontainer.append(ticketcont)
    handleRemovel(ticketcont); //passing ticket which created for remove
    lockunlock(ticketcont);
    ticketStripColorChange(ticketcont)

}

// unique id genrator
const uniqid = ()=>{
    return Math.floor(Math.random() * 100)
}
ticketbox.addEventListener("keydown",(e)=>{
     let key = e.key; //this give key which press

     if(key === "Shift"){
        createTicket(colorId,uniqid(),textarea.value);
        ticketbox.style.display="none"
        flag = false;
        textarea.value="";
     }
})

function handleRemovel(ticketcont){
    if(removeFlag) ticketcont.remove();

}
// for lock or unlock
const lockunlock = (ticketcont)=>{
     const lockdiv = ticketcont.querySelector(".lock")
     const falock = lockdiv.querySelector(".fa-lock")
     const taskarea = ticketcont.querySelector(".task")
     console.log(taskarea)
    //  console.log(falock)

    falock.addEventListener("click",()=>{
        if(falock.classList.contains(lock)){
            falock.classList.remove(lock);
            falock.classList.add(unlock)
            //for editable area
            taskarea.setAttribute("contenteditable","true")
        }else{
            falock.classList.remove(unlock)
            falock.classList.add(lock)
            //for disable edit 
            taskarea.setAttribute("contenteditable","false")
        }
       
       
    })

}

//for ticket strip color update

const ticketStripColorChange = (ticketcont)=>{
    const colorstrip = ticketcont.querySelector(".ticketcolor");
        // colorstrip.style.background="red";
    // colorstrip.addEventListener("click",()=>{
    //     colorstrip.s
    // })
    // const colorIndex = colors.findIndex((rgb)=>{
        
        
    // })
    // console.log(colorIndex)
    
    colorstrip.addEventListener("click",()=>{
       id++;
       const ids = id%colors.length;
       colorId = colors[ids];
    //    console.log(colorId)
       colorstrip.style.background=colorId;
    })
}

//for filters demo
 
// const a= [1,2,3,4,5];
// const number = (a)=>{
//     return a>2;
// }
// const filters = a.filter(number);
// console.log(filters)

// const rgb = ()=>{
//     return colors[2]
// }

// const rgbcolor = colors.filter(rgb);
// console.log(rgbcolor)

topcolor.forEach((topvalue,index)=>{
    const topclass = topvalue.classList[0];
    console.log(topclass)
})