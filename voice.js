//for text to speech
let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click",()=>{
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

//for voice change 
let voices = [];
let voiceSelect = document.querySelector("select");
console.log(voiceSelect)

 window.speechSynthesis.onvoiceschanged = ()=>{
   voices = window.speechSynthesis.getVoices(); //its add all voice which availabe
   //in deveices
   speech.voice = voices[0];
   
   //for display voices in list
   voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
                  
                  };
                  
voiceSelect.addEventListener("change",()=>{
  speech.voice = voices[voiceSelect.value];
})