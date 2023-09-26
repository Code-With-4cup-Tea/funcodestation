const input = document.querySelector(".searchinput");
const button = document.querySelector(".searchbutton");
const card = document.querySelector(".card");
const image = document.querySelector(".image");
// console.log(image.src);
const login = document.querySelector(".login");
const names = document.querySelector(".name");
const url = document.querySelector(".url");
const id = document.querySelector(".id");
const follower = document.querySelector(".follower");
const following = document.querySelector(".following");
const public_repos = document.querySelector(".public_repos");


var toggle = false;



const urls = "https://api.github.com/users";
const profile = async(inputvalue)=>{
    try{
        // const username = inputs();
        const url = await fetch(`${urls}/${inputvalue}`);
        
        const data = await url.json();
        console.log(data)
        // image.innerHTML="url`${data.avatar_url}`";
        login.innerHTML =data.login;
        names.innerHTML =data.name;
        url.innerHTML=data.html_url;
        id.innerHTML=data.id;
        follower.innerHTML=data.followers;
        following.innerHTML=data.following;
        public_repos.innerHTML=data.public_repos;
        Image.src=`"${data.avatar_url}"`;
    


       
    } catch(error){
    console.log({error})
    }
}


const inputs = ()=>{
    
    if(toggle){
        card.classList.add("hide")
    }else{
       
        card.classList.remove("hide")
        var inputvalue = input.value;
    
    return profile(inputvalue);
    }
    
    
    
}

button.addEventListener("click",inputs);

