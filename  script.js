const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    chatBox.appendChild(msgDiv);
    
    if (sender === 'bot') {
        typeText(msgDiv, text);
    } else {
        msgDiv.innerText = text;
    }
    
    chatBox.scrollTop = chatBox.scrollHeight;
}

function typeText(element, text) {
    let i = 0;
    element.innerText = "";
    const speed = 15; // Más rápido para un look moderno
    
    function typing() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            chatBox.scrollTop = chatBox.scrollHeight;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function simulateAI(query) {
    // Aquí puedes poner respuestas personalizadas o conectar la API después
    const responses = [
        "Analizando tu solicitud con los modelos Ultra...",
        "Entiendo perfectamente. Aquí tienes la solución basada en tus datos.",
        "Generando código en tiempo real siguiendo tus instrucciones."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function handleSend() {
    const text = userInput.value.trim();
    if (text === "") return;

    appendMessage(text, 'user');
    userInput.value = "";

    // Simular retraso de pensamiento
    setTimeout(() => {
        appendMessage(simulateAI(text), 'bot');
    }, 800);
}

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});


