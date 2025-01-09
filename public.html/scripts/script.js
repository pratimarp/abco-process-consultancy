window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    document.querySelector('.progress-bar').style.width = scrollPercentage + '%';
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const videoOverlay = document.querySelector(".video-overlay");
    const scrollThreshold = 150;

    window.addEventListener("scroll", function () {
        if (window.scrollY > scrollThreshold) {
            header.classList.add("scrolled");
            videoOverlay.classList.add("video-darkened");
        } else {
            header.classList.remove("scrolled");
            videoOverlay.classList.remove("video-darkened");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-button");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const description = button.previousElementSibling;
            description.classList.toggle("full-text");
            button.textContent = description.classList.contains("full-text") ? "Read Less" : "Read More";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navbar = document.getElementById('navbar-dropdown');
    const navLinks = document.querySelectorAll('#navbar-dropdown a'); 
    mobileToggle.addEventListener('click', (event) => {
        event.stopPropagation(); 
        navbar.classList.toggle('active');
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
    document.addEventListener('click', (event) => {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnToggle = mobileToggle.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnToggle) {
            navbar.classList.remove('active');
        }
    });
});

document.getElementById("sendEmailButton").addEventListener("click", function () {
    // Get user inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("messageBox").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const errorMessage = document.getElementById("errorMessage");
  
    // Regex to validate phone number (starting with + and followed by digits)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  
    if (message && contactNumber) {
      if (!phoneRegex.test(contactNumber)) {
        errorMessage.style.display = 'block';
        return;
      } else {
        errorMessage.style.display = 'none';
      }
  
      // Compose email parameters
      const subject = "Engagement for Process Engineering and Consultancy - ABCO Process Consultancy";
      const body = `Greetings,%0A%0A${encodeURIComponent(message)}%0A%0ARegards,%0A${encodeURIComponent(name)}%0AContact Number: ${encodeURIComponent(contactNumber)}%0AEmail: ${encodeURIComponent(email)}`;
      const mailtoLink = `mailto:contact@abcoprocess.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
      // Open the mail client with the composed email
      window.location.href = mailtoLink;
    } else {
      alert("Please fill out both the message and contact number fields.");
    }
  });
  