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

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simulate saving message and show success popup
  showSuccessPopup();

  // Clear the form
  document.getElementById("contact-form").reset();
});
function showSuccessPopup() {
  document.getElementById("success-popup").style.display = "block";
}

// Function to close the success popup
function closeSuccessPopup() {
  document.getElementById("success-popup").style.display = "none";
}


// Event listeners for the "Hire Me" and "Portfolio" buttons
document.querySelector('.hire__me').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.portfolio').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


window.onload = function() {
  document.querySelector('.contact-details').style.opacity = '1';
  document.querySelector('.contact-form').style.opacity = '1';
};

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add 'visible' class to the elements when they come into view
      entry.target.classList.add('visible');
      // Unobserve the element after it has appeared
      observer.unobserve(entry.target);
    }
  });
}

// Set up the observer
const observer = new IntersectionObserver(handleIntersection);

// Select the elements to observe
const contactDetails = document.querySelector('.contact-details');
const contactForm = document.querySelector('.contact-form');

// Start observing the elements
observer.observe(contactDetails);
observer.observe(contactForm);

