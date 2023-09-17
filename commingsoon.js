
const sele = document.querySelector("select")
console.log(sele.value)  //jo value list main selected wahi dega
const back = document.querySelector(".background")

sele.addEventListener("input",()=>{
    let values = sele.value;
    if(values==1){
        back.style.backgroundImage= "url('images/1.jpg')"
    }else if(values==2){
        back.style.backgroundImage= "url('images/2.jpg')"
    }else if(values==3){
        back.style.backgroundImage= "url('images/3.jpg')"
    }else{
        back.style.backgroundImage= "url('images/4.jpg')"
    }
 
})
