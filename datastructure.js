//  for print each element  1 //

// var datas = [2,5,6,8,9,7];
// for(var i=0; i<datas.length; i++){
        
//     document.write("each value of datas",datas[i],'<br>');

//     console.log("each value of datas" , datas[i]);
// }


//  for PRINT particular element  2 //


// var datas = [2,5,6,8,9,7];

// let x = 3;

// document.write(datas[x]);

// print element using button//

var datas = [2,5,6,8,9,7];

let but = document.querySelector("button");
let input = document.querySelector("input");

but.addEventListener("click",()=>{
    alert("function call");
    let values = input.value;

    document.write("your element number is ", datas[values]);


})



