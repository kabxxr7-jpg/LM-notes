document.getElementById("go").onclick = function () {
// Find the button with id "go". When it is clicked, run everything inside this function.
  var name = document.getElementById("name").value;
// Read the text in the name box and put it in a memory box called name.

  if (name === "") {
// If that memory box is empty (they typed nothing)...
    document.getElementById("title").textContent = "Type your name first.";
// Change the big heading to ask them to type a name first.
  } else {
// Otherwise they did type something, so do the next two lines.
    localStorage.setItem("looksmax-name", name);
// Copy the name from memory into the notebook, under the key "looksmax-name".
    document.getElementById("title").textContent = "Hi!! " + name;
// Change the heading to "Hi!! " plus whatever they typed.
  }
// This } closes the otherwise block.
};
// This } closes the click function. The ; ends the whole "when clicked, do this" line.

var saved = localStorage.getItem("looksmax-name");
// Page just loaded: read the notebook and put that value in a memory box called saved.
if (saved !== null) {
// If the notebook had a name (null means nothing was saved)...
  document.getElementById("title").textContent = "Hi!! " + saved;
// Show Hi plus the saved name in the heading.
  document.getElementById("name").value = saved;
// Put the saved name back into the name box.
}
// This } closes the "if we found a saved name" block.
var notes = [];
// Make an empty list in memory. Each new note will be added to this list.
var savedNotes = localStorage.getItem("looksmax-notes");
if (savedNotes !== null) {
    notes = JSON.parse(savedNotes);
    for (var i = 0; i < notes.length; i++) {
        var li = document.createElement("li");
        li.textContent = notes[i];
        document.getElementById("notes").appendChild(li);
        li.onclick = function () {
            this.remove();
            var index = notes.indexOf(this.textContent);
        if (index !== -1) {
          notes.splice(index, 1);
        localStorage.setItem("looksmax-notes", JSON.stringify(notes));
};
        };
        
        
          
   
    }
    document.getElementById("add").onclick = function () {
// Find the add button. When it is clicked, run everything inside this function.
    var note = document.getElementById("note").value;
// Read the text in the note box and put it in a memory box called note.
    if (note === "") {
// If they typed nothing...
        return;  
// Stop the function here so a blank note is not added.
    }
// This } closes the empty check.

    notes.push(note);
// Add this note to the end of the notes list in memory.
    localStorage.setItem("looksmax-notes", JSON.stringify(notes)); 
// Pack the whole list into one string, then write that string into the notebook.

       var li = document.createElement("li");
// Create a new list-item tag in memory. It is not on the page yet.
    li.textContent = note;
// Put the note text inside that list item.
    document.getElementById("notes").appendChild(li);
// Attach that list item to the notes list so it shows on the page.
li.onclick = function () {
    this.remove();
    var index = notes.indexOf(this.textContent);
if (index !== -1) {
  notes.splice(index, 1);
  localStorage.setItem("looksmax-notes", JSON.stringify(notes));
};
};

 };
};
// This } closes the add-button function. The ; ends the whole "when clicked, do this" line.
