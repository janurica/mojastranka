document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();  // Prevent from form submitting directly

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name && email && message){
        alert(`Thank you, ${name}! Your message has been sent.`);
        // * You can also handle sending the form data to a server here if needed  */
        document.getElementById("contactForm").reset();  // Reset the form
        } else {
            alert("Please fill out all fields before submitting.");
        }

});