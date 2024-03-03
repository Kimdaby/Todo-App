document
  .getElementById("toDoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var inputField = document.getElementById("inputField");
    var textValue = inputField.value;
    var toDoEntry = document.createElement("li");
    toDoEntry.textContent = textValue;

    inputField.value = "";
    var removebutton = document.createElement("button");
    removebutton.textContent = "X";
    removebutton.onclick = function () {
      toDoEntry.remove();
    };
    removebutton.className = "removebutton";
    toDoEntry.append(removebutton);
    document.getElementById("submitList").append(toDoEntry);
  });
