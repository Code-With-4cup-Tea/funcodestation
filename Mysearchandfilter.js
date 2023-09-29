//step 1
const input = document.querySelector(".user");
console.log(input);

const cards = document.querySelector(".cards");
// console.log(list)

//step7 create an array for storing data of list in array for searching apply

const arr = [];

//step2
const data = async () =>{
    try{
//step3
        const res = await fetch('https://api.github.com/users');
        // console.log(res);
        const datam = await res.json();
        // console.log(data);
        // console.log(data[0]);
        // console.log(data[0].avatar_url);

        //step4

        // if(datam){
            // console.log(list.textContent)
            //jaisiy hi data load hoga waisy hi loading text hat jayga
        //     list.innerHTML="";
        // }
            //step5
        datam.map((user)=>{
            // console.log(user);
            // console.log(user.id);


 //for create an element            
            const li = document.createElement('li');

            //step 8
            arr.push(li);

            // console.log(arr);
            // array main list store ho gaya

            li.insertAdjacentHTML('afterbegin',
            `              <div class="card">
            <div class="card-img">
                <img src=${user.avatar_url}>
            </div>
            <div class="desc">
                <h6 class="primary-text">${user.name}</h6>
                <h6 class="secondary-text">${user.login}</h6>
            </div>
            <a href=${user.html_url}><button class="primary-text">View Profile</button><a/>
            <div class="details">
                <div class="rating">
                    <h6 class="primary-text"> ${user.followers} </h6>
                    <h6 class="secondary-text">Followers</h6>
                </div>
                <div class="activity">
                    <h6 class="primary-text"> ${user.public_repos}</h6>
                    <h6 class="secondary-text">Repos</h6>
                </div>
            </div>
    </div>
            `
            
            )
            //step6
            //for add an element in html list
            cards.appendChild(li);
        })

       

    }catch{

    }
}

//step6


input.addEventListener('input',(e)=>{

        const val = e.target.value;
        // value hay wo dega ho user likh raha hain
        // console.log(val);

        //step9
        arr.map((currentelemet)=>{
                // console.log(currentelemet.innerText);
                //step 10
                currentelemet.innerText.toLowerCase().includes(val.toLowerCase()) ? currentelemet.classList.remove("hide") : currentelemet.classList.add("hide");
 // matalb yadi currentlement.innertext ko lower karkaey usay check kara jaye val ke text yani jo user dal raha usko bhi lower karo
 // yadi text match ho jata hai to hide class ko remove kardo wana add kardo   
 // map ki jagh hum filter se bhi kar saktey the   
       
            })
})
data();