//  for print each element  1 //

// var datas = [2,5,6,8,9,7];
// var item = 5;
// for(var i=0; i<datas.length; i++){
        
//   console.log(datas[])
// }



//  for PRINT particular element  2 //


// var datas = [2,5,6,8,9,7];

// let x = 3;

// document.write(datas[x]);

// print element using button//

// var datas = [2,5,6,8,9,7];

// let but = document.querySelector("button");
// let input = document.querySelector("input");

// but.addEventListener("click",()=>{
//     alert("function call");
//     let values = input.value;

//     document.write("your element number is ", datas[values]);


// })

var datas = [2,5,6,8,9,7];

let removepos = 3;

for(i=3;i<datas.length-1; i++){
   
    datas[i] = datas[i+1]; //jo bhi current position uski jagh next position wali item ko daldo 
    // phir last 
    
   
}
datas.length = datas.length-1; //datas ki lenght ko 1 se karm kar diya yani last wala item remved
console.log(datas)





