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




// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQDB0L7_jvaC2VlTbaNQ-oh5qcOJLB65I",
  authDomain: "portfolio-26007.firebaseapp.com",
  projectId: "portfolio-26007",
  storageBucket: "portfolio-26007.appspot.com",
  messagingSenderId: "687094963822",
  appId: "1:687094963822:web:d5df247c7ae8595167507f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the Firebase database
const messagesRef = ref(database, 'messages');

// Function to save message to Firebase Realtime Database
async function saveMessage(name, email, message) {
  try {
    await push(messagesRef, {
      name: name,
      email: email,
      message: message,
      timestamp: new Date().toISOString()
    });
    alert("Message sent successfully!");
  } catch (e) {
    console.error("Error adding message: ", e);
    alert("Error sending message!");
  }
}

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  saveMessage(name, email, message);

  // Clear the form
  document.getElementById("contact-form").reset();
});
