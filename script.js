const loader = document.querySelector('.loader');
const progressBar = document.querySelector('.progress-bar');
const progressNumber = document.getElementById('progressNumber');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const skillsSection = document.getElementById('skills');
const workSection = document.getElementById('work');
const contactSection = document.getElementById('contact');
const learnMoreButton = document.getElementById('butt');
learnMoreButton.addEventListener('click', () => {
  skillsSection.scrollIntoView({ behavior: 'smooth' }); 
});
function animateLoader() {
  let progress=0; 
  const interval = setInterval(() => {
    progress++;
    progressBar.style.width = progress + '%';
    progressNumber.textContent = progress + '%';

    if (progress == 101) {
      clearInterval(interval);
      loader.style.display = 'none'; 
      homeSection.style.display = 'block';
    }
  }, 10); 
}
window.onload = animateLoader;
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
let imageIndex = 0;
const images = [
  "images/me.jpg",
  "images/siifkoo.jpg",
  "images/me1-modified.jpg",
  "images/hubkiyya.jpg"
 
];
const currentImage = document.getElementById("currentImage");
function previousImage() {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  currentImage.src = images[imageIndex];
}
function nextImage1() {
  imageIndex = (imageIndex + 1) % images.length;
  currentImage.src = images[imageIndex];
}
function nextImage2() {
    imageIndex = (imageIndex + 2) % images.length;
    currentImage.src = images[imageIndex];
  }
  function nextImage2() {
    imageIndex = (imageIndex + 3) % images.length;
    currentImage.src = images[imageIndex];
  }     
function autoSlide() {
  nextImage(); 
  setTimeout(autoSlide, 20); 
}
autoSlide(); 
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

function sendMail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Improved email validation (more robust but still client-side).
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (!isValidEmail(email)) {
        displayMessage("Invalid email address.", "error");
        return; // Don't submit if email is invalid
    }



    function displayMessage(text, type) {
        formMessage.textContent = text;
        formMessage.classList.remove("success", "error");
        formMessage.classList.add(type);
        formMessage.style.display = "block";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxHDgVhJiUytVoBkUB9EWEnT2LhfhZDyfWJf8imvjDYWFphyLoCvys8y9RVZo1f4Viv/exec';

    fetch(scriptURL, { method: 'POST', body: new FormData(contactForm) }) //Use contactForm here
        .then(response => {
            if (response.ok) { // Check for successful response (status 200-299)
                displayMessage("Message sent successfully. Galatoomaa!", "success");
                contactForm.reset(); // Clear the form after successful submission
            } else {
                displayMessage("There was an error sending your message. Please try again later.", "error");
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            displayMessage("There was an error sending your message. Please try again later.", "error");
        });
}
const skillItems = document.querySelectorAll('.skilla');
    
skillItems.forEach((item, index) => {
    setTimeout(() => {
        item.style.opacity = 1; // Change opacity to make it visible
    }, index * 1000); // Delay increases with each item (1 second per item)
});
// script.js
function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('active');

  // Get the hamburger icon bars
  const bar1 = document.querySelector('.bar1');
  const bar2 = document.querySelector('.bar2');

  // Toggle classes for animation
  if (mobileMenu.classList.contains('active')) {
      bar1.style.transform = 'rotate(45deg) translate(5px, 5px)';
      bar2.style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
      bar1.style.transform = 'rotate(0) translate(0, 0)';
      bar2.style.transform = 'rotate(0) translate(0, 0)';
  }
}
