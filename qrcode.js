//step 1
const forms = document.querySelector(".forms");
// console.log(forms)

const img = document.querySelector(".qrimg");
console.log(img)
const imgdiv = document.querySelector(".qrimage");
console.log(imgdiv)

const inputext = document.querySelector(".inputtext");
console.log(inputext.name)

// const btn = document.querySelector(".btn")


//step5
const qrCodeShow = (Url)=>{

    
    img.src = Url;

    imgdiv.classList.remove("hide")

   


}


//step 2
forms.addEventListener("submit",(e)=>{
        e.preventDefault(); //it stop page reload  //step3

        const formdata  = new FormData(forms);  // forms ke submit pe value dega
        const value = formdata.get("qrcode");   //jo value input box main wo access hoga (qrcode) input box name hain   
        // console.log(value)

        // const QrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`;
        //example ki jagh wo value dalo jo user dalega

        //step 4
     const QrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;

     qrCodeShow(QrCodeUrl);



})


//!inputtext.value.trim()= agr input box ki value khuch na ho to hide kardo

//step6
inputext.addEventListener("keyup",()=>{
    if(!inputext.value.trim()){ 
     imgdiv.classList.add("hide");
    }
     
 })

