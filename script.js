document
  .getElementById("toDoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let inputField = document.getElementById("inputField");
    let textValue = inputField.value;
    let toDoEntry = document.createElement("li");
    toDoEntry.textContent = textValue;

    inputField.value = "";
    let removebutton = document.createElement("button");
    removebutton.textContent = "X";
    removebutton.onclick = function () {
      toDoEntry.remove();
    };
    removebutton.className = "removebutton";
    toDoEntry.append(removebutton);
    document.getElementById("submitList").append(toDoEntry);
  });
