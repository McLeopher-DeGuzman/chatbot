document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");
    const sendMessageBtn = document.getElementById("sendMessage");

    sendMessageBtn.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            appendUserMessage(userMessage);
            userInput.value = "";

            // Display loading message
            appendBotMessage("Bot is typing...");

            setTimeout(() => {
                const botReply = getBotReply(userMessage);
                replaceBotMessage(botReply);
            }, 3000); // Delay in milliseconds (3 second)
        }
    });

    function appendUserMessage(message) {
        const userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("chat-message");
        userMessageDiv.textContent = message;
        chatBox.appendChild(userMessageDiv);
    }

    function appendBotMessage(message) {
        const botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add("chat-message", "bot-message");
        botMessageDiv.textContent = message;
        chatBox.appendChild(botMessageDiv);
    }

    function replaceBotMessage(message) {
        const botMessageDiv = chatBox.lastChild;
        botMessageDiv.innerHTML = message.replace(/\n/g, "<br>"); // Replace newline with <br>
    }

    function getBotReply(userMessage) {
        // Convert user message to lowercase for case-insensitive comparison
        const lowerCaseUserMessage = userMessage.toLowerCase();

        // Add your rule-based logic here to determine bot's reply based on user's input
        if (lowerCaseUserMessage.includes("get started")) {
            return "Hello! \n \nHow can I assist you?";
        } else if (lowerCaseUserMessage.includes("help")) {
            return "Sure, I'm here to help. What do you need?";
        } else if (lowerCaseUserMessage.includes("insert haha")) {
            return "The insert operation has been initiated.";
        } else {
            return "I'm sorry, I don't understand that. Can you please rephrase?";
        }
    }
});
