const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const numberInput = document.getElementById("numberInput");
const sendBtn = document.getElementById("send");
const colorPicker = document.getElementById("colorPicker");

// Decrease the number
decrementBtn.addEventListener("click", () => {
  let currentValue = parseInt(numberInput.value);
  if (currentValue > 0) {
    numberInput.value = currentValue - 1;
  }
});

// Increase the number
incrementBtn.addEventListener("click", () => {
  let currentValue = parseInt(numberInput.value);
  numberInput.value = currentValue + 1;
});

// Handle the send button click
sendBtn.addEventListener("click", () => {
  alert(`Value: ${numberInput.value}, Color: ${colorPicker.value}`);
});
