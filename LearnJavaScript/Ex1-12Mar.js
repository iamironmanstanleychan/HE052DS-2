let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
let index = colors.length - 1;

const colorCountdown = setInterval(() => {
    console.log(colors[index]);
    index--;
    if (index < 0) {
        clearInterval(colorCountdown); // Stop the countdown
    }
}, 1000); // Repeat every 1 second
