window.addEventListener("keydown", playSound);

function playSound(e) {
  if (e.keyCode >= 65 || e.keyCode >= 83) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
}

const removeTransition = function(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
