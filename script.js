document.getElementById("go").onclick = function () {
  var name = document.getElementById("name").value;

  if (name === "") {
    document.getElementById("title").textContent = "Type your name first.";
  } else {
    localStorage.setItem("looksmax-name", name);
    document.getElementById("title").textContent = "Hi!! " + name;
  }
};

var saved = localStorage.getItem("looksmax-name");
if (saved !== null) {
  document.getElementById("title").textContent = "Hi!! " + saved;
  document.getElementById("name").value = saved;
}

var notes = [];
var savedNotes = localStorage.getItem("looksmax-notes");
if (savedNotes !== null) {
  notes = JSON.parse(savedNotes);
  for (var i = 0; i < notes.length; i++) {
    var li = document.createElement("li");
    li.textContent = notes[i];
    document.getElementById("notes").appendChild(li);
    li.onclick = function () {
      var index = notes.indexOf(this.textContent);
      if (index !== -1) {
        notes.splice(index, 1);
        localStorage.setItem("looksmax-notes", JSON.stringify(notes));
      }
      this.remove();
    };
  }
}

document.getElementById("add").onclick = function () {
  var note = document.getElementById("note").value;
  if (note === "") {
    return;
  }

  notes.push(note);
  localStorage.setItem("looksmax-notes", JSON.stringify(notes));

  var li = document.createElement("li");
  li.textContent = note;
  document.getElementById("notes").appendChild(li);
  li.onclick = function () {
    var index = notes.indexOf(this.textContent);
    if (index !== -1) {
      notes.splice(index, 1);
      localStorage.setItem("looksmax-notes", JSON.stringify(notes));
    }
    this.remove();
  };
};

function loadQuote() {
  document.getElementById("today").textContent = "loading...";

  fetch("https://dummyjson.com/quotes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("today").textContent = data.quote + " - " + data.author;
    })
    .catch(function () {
      document.getElementById("today").textContent = "Could not load a quote.";
    });
}

loadQuote();

document.getElementById("new-quote").onclick = function () {
  loadQuote();
};

document.getElementById("clear-name").onclick = function () {
  localStorage.removeItem("looksmax-name");
  document.getElementById("title").textContent = "hello, looksmaxxers";
  document.getElementById("name").value = "";
};

function loadQuoteList(howMany) {
  var list = document.getElementById("quote-list");
  list.innerHTML = "";

  fetch("https://dummyjson.com/quotes/random/" + howMany)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        li.textContent = data[i].quote + " - " + data[i].author;
        list.appendChild(li);
      }
    })
    .catch(function () {
      list.textContent = "Could not load quotes.";
    });
}

document.getElementById("load-quotes").onclick = function () {
  var n = Number(document.getElementById("quote-count").value);
  if (n < 1 || n > 10) {
    return;
  }
  loadQuoteList(n);
};
document.getElementById("load-quotes-10").onclick = function () {
  loadQuoteList(10);
};