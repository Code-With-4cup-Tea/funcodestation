//10: gloabal states creat kiya jaha all value store kar sakey 

const state= {
            earnings:0,
            expense:0,
            netamount:0 ,   //11: ye object hain jis maiy kuch value or key create kiya
        transaction:[ 
        //     {   ye array object hain

        //         id: 5,
        //         text: "demo",
        //         amount: 5000,
        //         type:"credit"

        // },
        //  {
        //     id: 6,            
        //         text: "demo debit",
        //         amount: 500,
        //         type:"debit"
        //  }
    ],
}






const text = document.querySelector("#text");


const earnBtn = document.querySelector("#earnBtn");
console.log(earnBtn)



const transactionforms = document.querySelector(".transactionforms");
console.log(transactionforms);


const rendertransaction = ()=>{ //16 ab jo data mill raha usay ui pe show karegay 

    const tranSactionContainer = document.querySelector(".transactions"); 
    const total_amount = document.querySelector(".total_amount"); // ye total ammount
    const earnamount = document.querySelector(".earnamount");
    const expenses = document.querySelector(".expenses");

    const statetransaction  = state.transaction; //17: state se transaction ko statetransaction main store
    //kar diya

    let earningamount= 0;  //18: itial value assign kar di
    let expamount = 0;
    let netamount=0;
        tranSactionContainer.innerHTML = "" //25: ye element ko kali kar dega
    statetransaction.forEach((transvalue)=>{ // 19: for each sarey element ko transvalue ek ek kar key
        // dal denga ab usay ek html cotent main daley
            const{id,amount,text,type} = transvalue; //20: trasnvalue se  id amount text type nikal langay
       const iscredit = type =='credit' ? true:false; //21: yadi type credit hai to iscredit ture ho jaye warna false
       const sign = iscredit  ? "+" : "-";   //22: iscredit ture hai to sign main + a jaye warna -
       const cd = iscredit ? "C" : "D";  // 23:yadi credit ture hia to c , cd main store kar do warna d
            const pasteinhtml = `
            <div class="transaction" id= "${id}">
                <div class="content" onclick=showEdit(${id})>
            <div class="left">
            <p>${text}</p>
            <p>${sign} ₹ ${amount}</p>
            </div>
            <div class="status ${iscredit ? "credit" : "debit" }">${cd}</div>
            </div>
            <div class="lower hide">
             <div class="icon">
              <i class="ri-pencil-fill" onclick=handleupdate(${id})></i>
              <i class="ri-delete-bin-6-fill" onclick=handledel(${id})></i>
             </div>
            </div>
          </div>
        
        `
        //27: for edit or delete in html
    //     ` <div class="transaction" id= "${id}">
    //     <div class="content">
    //     <div class="left">
    //     <p>${text}</p>
    //     <p>${sign} ₹ ${amount}</p>
    //     </div>
    //     <div class="status ${iscredit ? "credit" : "debit" }">${cd}</div>
    //     </div>
    //     <div class="lower">
    //      <div class="icon">
    //       <i class="ri-pencil-fill"></i>
    //       <i class="ri-delete-bin-6-fill"></i>
    //      </div>
    //     </div>
    //   </div>`
        earningamount += iscredit ? amount : 0; // earningamount , yadi iscredit true hoga to amount add ho jayga
        //warna earningamount ko 0 set kar do

        expamount += !iscredit ? amount:0; // yadi credit false hai to amount dal do expamount main warna 0

        netamount = earningamount-expamount;
        // 24: ab isko apen karegay di main jo main hia
        tranSactionContainer.insertAdjacentHTML("afterbegin", pasteinhtml); //but before that transactioncontainr ko khali bhi karna
        // hai



    })
    total_amount.innerHTML = `₹${netamount}`;  //25: value ab html element main pass kar diya
    earnamount.innerHTML = `₹${earningamount}`
     expenses.innerHTML = `₹${expamount}`

}

const addamount = (e)=>{
    e.preventDefault(); //2: jab add amount function call hoga tab ye reload na ho isliye 

    console.log(e) //7: ye bayayga ki konsay button se submit hua 

    console.log(e.submitter.id) // 8: jis button se submit hua uski id dega jo html main likha hoga
    
    const earning = e.submitter.id == "earnBtn" ? true: false; //9: eaning main ture or false store hoga
    // yadi sumitter ki id earnBtn hua to earning main ture store hoga is parkar se hum 
    // dono button main anter kar pagay

    
    const form = new FormData(transactionforms); //3: form se jo data milage usaay form variable main 
    //dala hain 

    const data = {} // ye data name ka object hian

    form.forEach((value,key)=>{  //4: from variable main jo jo data ayaga usay for easch se access kiya
        // or usko ek key id milega or value ayaga jisko hum ek object main store karegey 

        data[key] = value; // 5: jab jab submit hoga tab ek vlaue with key ke sath milega usay 
        // data name ke object main store kiya hian

    });
        const {text,amount} = data; //13: data object se text or ammount jo user dalega wo ayaga

    const transactions = {  //11: ye ek object create kiya jo transaction ki detail dega 
        // id , text, amount,type
        id: Math.floor(Math.random()*1000),  //12: ye random ek number dega
        text: text,
        amount: +amount,  //13: + ye string ko number main convert kar dega
        type:earning ? "credit" : "debit" //14: agar earning true hai t credit warna debit
    };

    state.transaction.push(transactions); //14: upar jo state ke ander transaction object array create
    // kiya tha usmay nicahy ke transactions se value push ho jaygga
    rendertransaction(); //26: uppar transaction hotey hi is function ko call ka degany
    console.log({state}); //15: checking ki data state main pass ho raha ki nahi
    // console.log(data) 6: data name ke object main jo value store hui usay print karega

}
//27: for when click on edit than open ye function call hoga upar content se waah se id ayaga

const showEdit =(id) =>{
const selectedTransaction = document.getElementById(id); //28: id ka use karkey wo element milega
const lowerEl = selectedTransaction.querySelector(".lower") // 29: 28 main jo element mila hai usmay se .lower class wala element select karegay
lowerEl.classList.toggle("hide"); //30: click karnay pe deletel or edit wala deikega or band hoga
}


const handledel = (id)=>{   //31:for delete
const filterd = state.transaction.filter((t)=>t.id == id)    //30: state ke ander jo transation object array usamy say
                                                        //31 > jo id match karegi jo id upaar se ayagi click karnay pe usako chor ke sabko filterd main array ke roop main dal dega
                                               
            state.transaction = filterd; //32: jo filterd main array mill usko dubara se hum sated ke transaction main asign kar diya to wahi dekgea jo hai delete kiya hua nahi
            rendertransaction(); // 33: function ko dubara call kar diya taki update ho jaye

}


const handleupdate = (id)=>{   //31:for delete
            const transaction = state.transaction.find((t)=>t.id == id) //34: ye same id ke trasnsation ko dundhega
    const{text,amount} = transaction;   //35: text or ammount
// console.log(text,amount);
const textinput = document.getElementById("text"); //36: text ko select kiya
const amountinput=document.getElementById("amount"); //37:amount ko select kiya
textinput.value = text; //38: text ki value pass
amountinput.value = amount; //39: amount value  pass
        }
rendertransaction(); //26 : taki jo pheley se value tha html main wo hat jaye
transactionforms.addEventListener("submit",addamount); //1 : from pe even listner lagaya hai or jo
//value submit hogi usay addamount ke fucntion main store kia 

