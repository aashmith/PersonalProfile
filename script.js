// Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        document.getElementById('form-status').textContent = 'Please fill in all fields.';
        return;
    }

    // Send the form (you can integrate with an email API like EmailJS here)
    document.getElementById('form-status').textContent = 'Message sent successfully!';
    // Reset the form
    document.getElementById('contact-form').reset();
});
