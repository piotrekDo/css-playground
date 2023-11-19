const textField = document.getElementById("text");
const statusField = document.getElementById('status');

textField.value = localStorage.getItem("notes");

let timeout;
textField.addEventListener("keyup", event => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    statusField.innerHTML = 'sync...'
    console.log(textField.value)
    setTimeout(() => {
      localStorage.setItem("notes", textField.value);
      statusField.innerHTML = 'ready';
    }, 1000);
  }, 500);
});
