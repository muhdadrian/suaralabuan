'use strict';

//first section

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// second section

const hamburgerMenu = document.querySelector('.hamburger');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Date
let currentDate = new Date();
let dateContainer = document.getElementById('current-date');
dateContainer.innerHTML = currentDate.toDateString();

// Islamic Date
let today = new Date();
let options = {
  timeZone: 'Asia/Kuala_Lumpur',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  // hour: 'numeric',
  // minute: 'numeric',
  // second: 'numeric',
  // hour12: false,
  calendar: 'islamic-civil',
};
let islamicDate = today.toLocaleString('ms-MY', options);
document.getElementById('islamicDate').innerHTML = islamicDate;

//Slide
const sliderImages = document.querySelectorAll('.slider img');
const sliderLinks = document.querySelectorAll('.slider a');
const sliderPrev = document.querySelector('.slider-buttons .prev');
const sliderNext = document.querySelector('.slider-buttons .next');
const intervalTime = 2500;

let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.opacity = 0;
  }
}

function startSlide() {
  reset();
  sliderImages[current].style.opacity = 1;
  current++;
  if (current >= sliderImages.length) {
    current = 0;
  }
  setTimeout(startSlide, intervalTime);
}

function slideRight() {
  reset();
  let captions = document.getElementsByClassName('caption');
  current++;
  if (current >= sliderImages.length) {
    current = 0;
  }
  sliderImages[current].style.opacity = 1;
  sliderIndex++;
  if (sliderIndex > captions.length) {
    sliderIndex = 1;
  }
  captions[sliderIndex - 1].style.opacity = '1';
}

function slideLeft() {
  reset();
  let captions = document.getElementsByClassName('caption');
  current--;
  if (current < 0) {
    current = sliderImages.length - 1;
  }
  sliderImages[current].style.opacity = 1;
  sliderIndex--;
  if (sliderIndex < 1) {
    sliderIndex = captions.length;
  }
  captions[sliderIndex - 1].style.opacity = '1';
}

startSlide();

// Add link functionality to images
for (let i = 0; i < sliderLinks.length; i++) {
  sliderLinks[i].addEventListener('click', function () {
    window.location.href = sliderLinks[i].href;
  });
}

// Add click event listeners to buttons
sliderPrev.addEventListener('click', slideLeft);
sliderNext.addEventListener('click', slideRight);

// caption
let sliderIndex = 0;
showSlider();

function showSlider() {
  let i;
  let captions = document.getElementsByClassName('caption');
  for (i = 0; i < captions.length; i++) {
    captions[i].style.opacity = '0';
  }
  sliderIndex++;
  if (sliderIndex > captions.length) {
    sliderIndex = 1;
  }
  captions[sliderIndex - 1].style.opacity = '1';
  setTimeout(showSlider, 2500);
  // Change caption every 5 seconds
}
