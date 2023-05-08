document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
    // code to execute when the user scrolls goes here
    var headerHeight = document.querySelector('header').offsetHeight;
    // get the current scroll position of the window
    var scrollPosition = window.scrollY || window.pageYOffset;

    // check if the user has scrolled past the header element
    if (scrollPosition > headerHeight) {
      // add a class to the navigation bar
      document.querySelector('.nav-ul').classList.add('scrolled'),
      document.querySelector('.nav-social').classList.add('scrolled');
    } else {
      // remove the class from the navigation bar
      document.querySelector('.nav-ul').classList.remove('scrolled'),
      document.querySelector('.nav-social').classList.remove('scrolled');
    }
  });
});


// Carousel 

const buttons = document.querySelectorAll("[data-carousel-button]")
const dotsContainer = document.querySelectorAll("[data-carousel-dots]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset =  button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true  
    delete activeSlide.dataset.active

    dotsContainer.forEach(dotsContainer => {
      const dots = dotsContainer.children;

      for (const dot of dots) {
        dot.classList.remove("active");
      }

      dots[newIndex].classList.add("active");
    })
  })
})


// Active Links Color //

const currentLocation = location.href;
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});