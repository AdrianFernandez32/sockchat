let socket = io();

const form = document.querySelector("form");
const input = document.querySelector("input");
let messages = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat", input.value);
    input.value = "";
  }
});

socket.on("chat", (msg) => {
  let message = document.createElement("li");
  message.textContent = msg;
  messages.appendChild(message);
  window.scrollTo(0, document.body.scrollHeight);
});
