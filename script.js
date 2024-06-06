document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed('.typed-text', {
      strings: ['Designer.', 'Developer.', 'Freelancer.'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });
  });
  


  // Function to open the popup
function openPopup() {
  document.getElementById("resume-popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
  document.getElementById("resume-popup").style.display = "none";
}

// Event listener to open the popup when clicking the resume link
document.getElementById("resume-link").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  openPopup(); // Open the popup
});




