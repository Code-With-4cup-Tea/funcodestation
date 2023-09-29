const total_amount = document.querySelector(".total_amount");
const text = document.querySelector("#text");

const earnBtn = document.querySelector("#earnBtn");
const earnamount = document.querySelector(".earnamount");
// console.log(earnamount)

const transactionform = document.querySelector(".transactionform");


const addamount = (e)=>{
    e.prevenDefault();
    const values = e.target.value;
    console.log(values)
}

earnBtn.addEventListener("click",addamount)