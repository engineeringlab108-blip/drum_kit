function playSound(id) {
    const audio = document.getElementById(id);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
    animateButton(id);
}

document.addEventListener("keydown", function (event) {
    let key = event.key.toLowerCase();

    switch (key) {
        case "a":
            playSound("kick");
            break;
        case "s":
            playSound("snare");
            break;
        case "d":
            playSound("hihat");
            break;
        case "f":
            playSound("tom");
            break;
        case "g":
            playSound("tom-3");
            break;
        case "h":
            playSound("tom-4");
            break;
        default:
            break;
    }

    if (event.key === "Enter") {
        playSound("crash");
    }
});

function animateButton(id) {
    const btn = document.querySelector(`.drum[data-drum="${id}"]`);
    if (btn) {
        btn.classList.add("active");
        setTimeout(() => btn.classList.remove("active"), 150);
    }
}
