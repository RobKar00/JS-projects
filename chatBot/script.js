const addMessageBtn = document.getElementsByClassName('send-btn')[0];
const messageShow = document.getElementsByClassName('add-message-area')[0];
const input = document.getElementsByClassName('input')[0];

const questionArr = ["How are you?", "How old are you?", "What time is it?",
"Do you have a hobbie?.", "What is your orientation?"];

const answerArr = ["Fine, thanks!", "I am 7 years old.", `Now is ${new Date()}`,
 "I like answering the questions.",  "Are you kidding me? I'm not a human."];

function addNewMessages() {
    let inputsValue = input.value.trim();
    let p = document.createElement('p'); 
    let newContent = document.createTextNode(inputsValue);
    p.appendChild(newContent); 
    p.classList.add('question');
    if(inputsValue) {
        messageShow.append(p);
        setTimeout((inputsValue) => {
            addBotsMessages(inputsValue);
        }, 1200, inputsValue);
    }
    input.value = '';
}

function takeMessageByEnter({ key, target }) {
    const messageText = target.value.trim();
    if(key == "Enter" && messageText != ""){
        addNewMessages(key);
        setTimeout((item) => {
            renderMessageAnswer(item);
        }, 1200, messageText);
        target.value = "";
    }
}

function addBotsMessages(message) {
    let defAnswer = "I'm sorry, I don't understand.";
    let index;
    for (let i = 0; i < questionArr.length; i++) {
        if (message == questionArr[i]) {
            index = i;
            break;
        } 
    }
    if(index != undefined) defAnswer = answerArr[index];
    messageShow.innerHTML += `<p class="answer">${defAnswer}</p>`;
    messageShow.scrollTop = messageShow.scrollHeight;
}

addMessageBtn.addEventListener("click", addNewMessages);
input.addEventListener("keypress", takeMessageByEnter);



