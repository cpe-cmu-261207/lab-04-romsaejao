function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must type something");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input").value = "";

  var btn = document.createElement("btn");
  var txt = document.createTextNode("text");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = close.length; i >= 0 ; i--) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

