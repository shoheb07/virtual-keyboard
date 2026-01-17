const textarea = document.getElementById("textInput");
const keys = document.querySelectorAll("button");
let capsLock = false;

keys.forEach(key => {
  key.addEventListener("click", () => {
    const value = key.textContent;

    if (value === "Space") {
      textarea.value += " ";
    }
    else if (value === "Enter") {
      textarea.value += "\n";
    }
    else if (value === "⌫") {
      textarea.value = textarea.value.slice(0, -1);
    }
    else if (value === "Caps") {
      capsLock = !capsLock;
      key.classList.toggle("active");
    }
    else {
      textarea.value += capsLock ? value : value.toLowerCase();
    }

    textarea.focus();
  });
});
