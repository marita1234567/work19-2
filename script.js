let addButton = document.getElementById("btn");

function addelement(addinfo) {
  let promtt = prompt("ჩაწერეთ სასურველი სიტყვა");

  if (!promtt) {
    alert("shevset veili");
  } else {
    let ul = document.getElementById("addlii");
    let li = document.createElement("li");
    li.textContent = promtt;
    ul.appendChild(li);
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    li.appendChild(removeBtn);
    removeBtn.addEventListener("click", () => {
      ul.removeChild(li);
    });
    
  }
}

addButton.addEventListener("click", addelement);