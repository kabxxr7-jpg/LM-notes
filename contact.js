document.getElementById("contact-form").onsubmit = function (event) {
    event.preventDefault();
  
    var contactName = document.getElementById("contact-name").value;
    var contactEmail = document.getElementById("contact-email").value;
    var contactMessage = document.getElementById("contact-message").value;
  
    if (contactName === "" || contactEmail === "" || contactMessage === "") {
      document.getElementById("thanks").textContent = "Fill in all the boxes first.";
      return;
    }
    document.getElementById("contact-name").value = "";
document.getElementById("contact-email").value = "";
document.getElementById("contact-message").value = "";
  
    document.getElementById("thanks").textContent = "thanks. this form does not email anyone yet.";
  };