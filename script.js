function playSound(id) {
    let sound = document.getElementById(id);
    let box = document.querySelector(`.drum[onclick="playSound('${id}')"]`);

    sound.currentTime = 0;
    sound.play();

    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 150);
}
