document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Check if form is valid
    if (!event.target.checkValidity()) {
      event.preventDefault(); // Prevent form submission
      alert('Please fill out all fields correctly.'); // Show message
    }
  });