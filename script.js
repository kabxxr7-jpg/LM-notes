document.getElementById("go").onclick = function () {
    var name = document.getElementById("name").value;
  
    if (name === "") {
      document.getElementById("title").textContent = "Type a name first.";
    } else {
      document.getElementById("title").textContent = "Hello, " + name;
    }
  };


