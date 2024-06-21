document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
        alert("All fields are required.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    alert("Form submitted successfully!");

    // Here you can add the code to send the form data to your server

    document.getElementById('contactForm').reset();
});
