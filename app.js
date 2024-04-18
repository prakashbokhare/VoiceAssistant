const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const API_KEY = 'AIzaSyC6Q69_J95goo9AjNRtfyAEHSxaYoSL8zc';
let output = ''; // Replace with your OpenAI API key

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.voice = window.speechSynthesis.getVoices()[7];
    text_speak.pitch = 0.9;
    text_speak.rate = 1.2;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    } else if(hr == 12) {
        speak("Good noon Boss");
    } else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    } else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Rani");
    // speak("Going online");
    // wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
};

btn.addEventListener('click', ()=>{
    recognition.start();
});

 function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.voice = window.speechSynthesis.getVoices()[7];
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    if(message.includes('tell me about')) {
        // const query = message.replace('tell me about', '').trim();
        // speech.text = response || "I couldn't find information on that.";
        GeminiResponse(message)

    } else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    } else if(message.includes('name') && message.includes('your')) {
        const finalText = "My name is Rani";
        speech.text = finalText;
    } else if(message.includes('i love you')) {
        // const finalText = "i Love you 2 prakash baby";
        Bulwalo("Madhr Choood . Bahin Chood. teeeri Ma Ki Choot")
        speech.text = finalText;
    } else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    } else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    } else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
        const finalText = time;
        speech.text = finalText;
    } else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"});
        const finalText = date;
        speech.text = finalText;
    } else if(message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    else if(message.includes('ayushi')) {
        const finalText = "dushman hai wo dushman";
        speech.text = finalText;
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    window.speechSynthesis.speak(speech);
}






// gemin api is stared from here
function GeminiResponse(msg) {
    const API_KEY = "AIzaSyC6Q69_J95goo9AjNRtfyAEHSxaYoSL8zc";
    console.log('Loading....') 
    const requestData = {
      contents: [
        {
          role: "user",
          parts: [{ text: ` ${msg} .` }],
        },
      ],
    };
  
    fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        //   console.log(data["candidates"][0]["content"]["parts"][0].text);
        output = data["candidates"][0]["content"]["parts"][0].text;
        console.log(output)      
        speak(output)
        // Bulwalo(output)
        
        
        //genralChatArr.bot.push(output); //jab gemini response dega tab localhost me save karna hai
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        output = `catch wala function he ye `;       
        console.log(output)    
  
        
      });
  }
  
 

function Bulwalo(msg){
    const speech = new SpeechSynthesisUtterance();
    speech.voice = window.speechSynthesis.getVoices()[6];
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    speech.text = msg;
    window.speechSynthesis.speak(speech);
    console.log()
}

Bulwalo("Hello my name is Rani. How can i help you")



