"use strict";

var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('.nav-item a');
var scrollIcon = document.querySelector('.scroll-icon'); //nav active

window.addEventListener('scroll', function () {
  var current = '';
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(function (link) {
    link.parentElement.classList.remove('active');

    if (link.getAttribute('href').includes(current)) {
      link.parentElement.classList.add('active');
    }
  }); //Arrow 

  if (window.scrollY > 300) {
    scrollIcon.style.display = 'flex';
  } else {
    scrollIcon.style.display = 'none';
  }
}); //Frontend Developer

document.addEventListener('DOMContentLoaded', function () {
  var textElement = document.getElementById('typing-effect');
  var text = 'Frontend Developer';
  var index = 0;

  var typingEffect = function typingEffect() {
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
    }).then(function () {
      console.log('Link shared successfully');
    })["catch"](function (error) {
      console.error('Error sharing the link:', error);
    });
  } else {
    alert('Sharing is not supported on this browser.');
  }
}