document.addEventListener('DOMContentLoaded', function() {
    // Add interactivity here
    document.querySelector('.newsletter-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for subscribing!');
    });
});
