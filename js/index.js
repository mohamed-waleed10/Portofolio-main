const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item a');
const scrollIcon = document.querySelector('.scroll-icon');

//nav active
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.parentElement.classList.add('active');
        }
    });
//Arrow 
    if (window.scrollY > 300) {
        scrollIcon.style.display = 'flex';
    } else {
        scrollIcon.style.display = 'none';
    }
});
//Frontend Developer
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-effect');
    const text = 'Frontend Developer';
    let index = 0;

    const typingEffect = () => {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(typingEffect, 200); 
        }
    };

    textElement.textContent = ''; 
    typingEffect();
});


function shareLink(url) {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this project!',
            text: 'Take a look at this awesome project!',
            url: url
        }).then(() => {
            console.log('Link shared successfully');
        }).catch((error) => {
            console.error('Error sharing the link:', error);
        });
    } else {
        alert('Sharing is not supported on this browser.');
    }
}