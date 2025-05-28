
// Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {   // Simple script to log a message and add interactivity
            console.log("Welcome to the Simple HTML Layout!");
            // alert('DOM loaded!');
            // Function to show an alert when the button is clicked
            document.getElementById("alertButton").addEventListener("click", function() {
                alert("Hello! Thanks for clicking the button!");
            });

            // Dynamic year for the footer
            document.getElementById("currentYear").textContent = new Date().getFullYear();
});


