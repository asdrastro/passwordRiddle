const correctAnswer = "password";
let timer;

function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Congratulations! only 10% of people solve this ridde, good shit. Welcome to the network Cherrie-On-The-Line!, please feel free pirating movies or streaming on 123movies!");
        clearTimeout(timer);
    } else {
        alert("Sorry, very close but wrong password... HINT:The ->'password'<- is less than meets the eye, but more than meets the spelling of the phrase in question");
    }
}

// Set a 10-second timer
timer = setTimeout(() => {
    alert("Time's up! The quest has ended.");
}, 10000);
