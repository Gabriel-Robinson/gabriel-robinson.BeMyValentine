document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("message").innerText = "Yay! I knew you'd say yes! ❤️";

    // Fire confetti 🎉
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

const countdownDate = new Date("February 14, 2025 00:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Happy Valentine's Day! 💖";
    }
}, 1000);


