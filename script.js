document.getElementById("go").onclick = function () {
    var name = document.getElementById("name").value;
  
    if (name === "") {
      document.getElementById("title").textContent = "Type your name first.";
    }  else { localStorage.setItem("looksmax-name", name);
      document.getElementById("title").textContent = "Hi!! " + name;
    } 
  }


  var saved = localStorage.getItem("looksmax-name");

if (saved !== null) {
  document.getElementById("title").textContent = "Hi!! " + saved;
  document.getElementById("name").value = saved;
}