document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    function toggleMenu() {
        navMenu.classList.toggle('visible');
    }

    hamburger.addEventListener('click', toggleMenu);
});
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Optionally, close the menu after clicking a link
        navMenu.classList.remove('visible');
    });
});
const projectItems = document.querySelectorAll('.project-item');
const filterButtons = document.querySelectorAll('.filter-button');

function filterProjects(category) {
    projectItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        filterProjects(category);
    });
});

const projectImages = document.querySelectorAll('.project-item img');
const lightbox = document.createElement('div');
const lightboxImage = document.createElement('img');

lightbox.id = 'lightbox';
lightbox.style.display = 'none';
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = '1000';

lightboxImage.style.maxWidth = '90%';
lightboxImage.style.maxHeight = '90%';

lightbox.appendChild(lightboxImage);
document.body.appendChild(lightbox);

projectImages.forEach(image => {
    image.addEventListener('click', function() {
        lightboxImage.src = this.src;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
});
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '') {
        isValid = false;
        alert('Please enter your name.');
    }

    if (email === '') {
        isValid = false;
        alert('Please enter your email.');
    } else if (!validateEmail(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    if (message === '') {
        isValid = false;
        alert('Please enter your message.');
    }

    if (isValid) {
        contactForm.submit();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
nameInput.addEventListener('input', function() {
    if (nameInput.value.trim() === '') {
        nameInput.setCustomValidity('Please enter your name.');
    } else {
        nameInput.setCustomValidity('');
    }
});

emailInput.addEventListener('input', function() {
    if (emailInput.value.trim() === '') {
        emailInput.setCustomValidity('Please enter your email.');
    } else if (!validateEmail(emailInput.value.trim())) {
        emailInput.setCustomValidity('Please enter a valid email address.');
    } else {
        emailInput.setCustomValidity('');
    }
});

messageInput.addEventListener('input', function() {
    if (messageInput.value.trim() === '') {
        messageInput.setCustomValidity('Please enter your message.');
    } else {
        messageInput.setCustomValidity('');
    }
});
