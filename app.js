const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

 button.addEventListener("click", () => {
   const value = document.querySelector('.input').value;
   output.innerHTML = value.split("").reverse().join("")
   input.value = ""
 })

