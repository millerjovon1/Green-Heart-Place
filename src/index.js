document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenuContainer = document.querySelector('.nav-menu-container');

  if (navToggle && navMenuContainer) {
      navToggle.addEventListener('click', () => {
          navMenuContainer.classList.toggle('active');
      });

      // Close menu when clicking outside of it
      document.addEventListener('click', (event) => {
          if (!navMenuContainer.contains(event.target) && !navToggle.contains(event.target)) {
              navMenuContainer.classList.remove('active');
          }
      });
  }
});
var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
           panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
      let slideIndex = 0;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 2 seconds
      }
