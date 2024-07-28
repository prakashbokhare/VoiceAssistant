const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Devid");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }
         else if(message.includes('how r u')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    } 
       else if(message.includes('Motivation') ||  message.includes('motivation')) {
        const quotes = [
            `The only way to do great work is to love what you do. - Steve Jobs`,
            `The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb`,
            `Your time is limited, don’t waste it living someone else’s life. - Steve Jobs`
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        const finalText = quote;
           speech.text = finalText;
    } 
               else if(message.includes('tell me a joke')) {
        const jokes = [
            `Why don't scientists trust atoms? Because they make up everything!`,
            `Why did the scarecrow win an award? Because he was outstanding in his field!`,
            `Why don’t skeletons fight each other? They don’t have the guts`
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
    }
         else if(message.includes('Ayushi')) {
        const finalText = "dushman hai wo meri";
        speech.text = finalText;
    }
      
        else if(message.includes('play') && message.includes('music')) {
        window.open(`https://youtube.com/clip/Ugkxl_1mEjWsoM8CqMvmuEgDDt3BxhEjA_Gq?feature=shared`);
        const finalText = "Playing " + message.replace("play ", "") + " on YouTube.";
        speak(finalText);
    }
    else if(message.includes('news')) {
        window.open(`https://news.google.com`, "_blank");
        speak("Here are the latest news updates.");
    }
    else if(message.includes('weather')) {
        window.open(`https://www.google.com/search?q=weather+in+${message.replace("weather in ", "")}`, "_blank");
        const finalText = "This is what I found about the weather in " + message.replace("weather in ", "");
        speak(finalText);
    }
    else if(message.includes('prime minister')) {
        // window.open(`https://www.google.com/search?q=weather+in+${message.replace("weather in ", "")}`, "_blank");
        const finalText = "Our Prime Minister Is Mister Narendra Modi"
        speak(finalText);
    }
    else if(message.includes('your name')) {
        const finalText = "My name is Devid";
        speech.text = finalText;
    }
         else if(message.includes('Java')) {
        const finalText = "java was originally developed by James Gosling at sun microsystems";
        speech.text = finalText;
    }
              else if(message.includes('Javascript')) {
        const finalText = "javascript was invented by Brendan Eich in 1995";
        speech.text = finalText;
    }
        else if(message.includes('HTML')) {
        const finalText = "HTML stands for HyperText Markup Language and is the language of the internet";
        speech.text = finalText;
    }
         else if(message.includes('computer science')) {
        const finalText = "Charles Babbage";
        speech.text = finalText;
    }   
       
         else if(message.includes('Who developed the first electronic computer')) {
        const finalText = "J.V. Atansoff";
        speech.text = finalText;
    }
      
         else if(message.includes('What converts an entire program into machine language')) {
        const finalText = "Compiler";
        speech.text = finalText;
    }



    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
console.log("updated test 2")
