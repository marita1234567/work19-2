let addButton = document.getElementById("btn");
      

function addelement(addinfo) {
  let promtt = prompt("ჩაწერეთ სასურველი სიტყვა");
  
  if (!promtt) {
    alert("გამარჯობა");
    
 

    
  } 

  let ul = document.getElementById("addlii");
  let li = document.createElement("li");
  li.textContent = promtt;


  let Button1 = document.createElement("button");
  Button1.textContent = "delete";
  Button1.click = function(deleteinfo) {
    ul.removeChild(li);
  li.appendChild(button1);
 
    
  }


}


addButton.addEventListener("click", addelement);