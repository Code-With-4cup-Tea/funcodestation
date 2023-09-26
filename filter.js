const titles = document.querySelector(".titles");
const para = document.querySelector(".para");
const ammount = document.querySelector(".ammount");
const back = document.querySelector(".back");
// console.log(back);
const search = document.querySelector(".inputs");
console.log(search)

const url = "https://fakestoreapi.com/products";
// console.log(url)
const fetchproduct =async ()=>{
    try{
        const item =await fetch(`${url}`);
        const data = await item.json();
    //    console.log(data)
        data.forEach((datam)=>{
           back.innerHTML += 
        `<div class="card">
            <div class="img">
                <img src="${datam.image}" alt="">
            </div>
            
            <div class="detail">
                <h2 class="titles">${datam.title} </h2>
                <p class="para">${datam.description.split(" ").slice(0, 20).join(" ")}</p>
                <button class="ammount">${datam.price}</button>
            </div>
        </div>`
        
        })
        
    }catch(error){
            return error;
    }
    
    // const results = ()=>{
    //     const lower = search.value.toLowerCase()
    //     // console.log(search.value.toLowerCase());
    //    const r = data.toString().toLowerCase().includes(lower);
    //    console.log(r);
        
    //  }
     
    //  search.addEventListener("input",results);
    
    
}

fetchproduct();






// // console.log(fetchproduct());
// const datas = fetchproduct();
// console.log(datas);

// // datas.forEach((datam)=>{

// //     console.log(datam);

// // })