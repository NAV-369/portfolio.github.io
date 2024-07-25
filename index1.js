const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });
      
        target.classList.add('tab__active');
        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });
        tab.classList.add('tab__active');
    });      
});
//contact - form\\
document.addEventListener("DOMContentLoaded", function() {
  // Initialize EmailJS with your user ID
  try {
    emailjs.init('gbKTkwxEUdfBQ8Yvk');
    console.log("EmailJS initialized successfully");
  } catch (error) {
    console.error("Error initializing EmailJS:", error);
    return;
  }

  const contactForm = document.getElementById('contact-form');
  const errorMessage = document.getElementById('error-message');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted");

    // Clear previous error messages
    errorMessage.textContent = '';
    errorMessage.classList.remove('color-first', 'error-color');
    setTimeout(()=>{
      errorMessage.textContent='';},5000);
     
    
    

    // Validate form fields
    const name = document.getElementById('contact__name').value.trim();
    const email = document.getElementById('contact__email').value.trim();
    const subject = document.getElementById('contact__subject').value.trim();
    const message = document.getElementById('contact__message').value.trim();

    if (!name || !email || !subject || !message) {
      errorMessage.textContent = 'All fields are required.';
      errorMessage.classList.add('error-color');
      console.log("Validation failed: All fields are required");
      return;
    }

    // Validate email format (simple regex for example purposes)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      errorMessage.classList.add('error-color');
      console.log("Validation failed: Invalid email address");
      return;
    }

    console.log("Validation passed");

    // Send email using EmailJS
    emailjs.sendForm('service_qyt7n38', 'template_9uiiy0h', '#contact-form')
      .then(function(response) {
        console.log("Email sent successfully:", response);

        // Show success message and color
        errorMessage.classList.add('color-first');
        errorMessage.textContent = 'Message sent ✔';

        // Remove message after 5 seconds
        setTimeout(() => {
          errorMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset();
      }, function(error) {
        // Show error message
        errorMessage.textContent = 'Oops! Something went wrong...';
        errorMessage.classList.add('error-color');
        console.error("EmailJS error:", error);
      });
  });
});
//change background header
function scrollHeader(){
  const header= document .getElementById('header');
  // when scroll > 80 viewport add the scroll to  header tag
   if(this.scrollY >= 80) header.classList.add('scroll-header');
   else header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);

// show scrollup

function scrollup(){
  const scrollup= document .getElementById('scroll-up');
  // when scroll > 350 viewport add the scroll-up to scroll-top 
   if(this.scrollY >= 350) scrollup.classList.add('show-scroll');
   else scrollup.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollup);

// Cv
function downcv(){
  const link= document.createElement('a');
  link.href= 'assets/CV1.docx';
  link.download= 'CV.docx';
  link.click();
}

//toggle


document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');
  const toggleIcon = navToggle.querySelector('i');

  // Function to show the menu
  function showMenu() {
      navMenu.classList.add('show');
      toggleIcon.classList.remove('uil-bars');
      toggleIcon.classList.add('uil-times');
  }

  // Function to hide the menu
  function hideMenu() {
      navMenu.classList.remove('show');
      toggleIcon.classList.remove('uil-times');
      toggleIcon.classList.add('uil-bars');
  }

  // Toggle the navigation menu
  navToggle.addEventListener('click', function () {
      if (navMenu.classList.contains('show')) {
          hideMenu();
      } else {
          showMenu();
      }
  });

  // Close the navigation menu when any link is clicked
  navLinks.forEach(function (link) {
      link.addEventListener('click', hideMenu);
  });
});











    // Send email using EmailJS
/*emailjs.send('service_qyt7n38', 'template_9uiiy0h', {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message
}, 'gbKTkwxEUdfBQ8Yvk')
.then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert('Message sent successfully!');
    contactForm.reset();
}, function(error) {
    console.error('FAILED...', error);
    errorMessage.textContent = 'Failed to send message. Please try again later.';
});
*/
