document.addEventListener("DOMContentLoaded", function() {
    var fadeElements = document.querySelectorAll(".fade-in-element");
  
    function fadeInOnScroll() {
      fadeElements.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;
  
        if (elementPosition < screenPosition && element.style.opacity !== "1") {
          element.style.opacity = "1";
        }
      });
    }
  
    // Fade in on page load
    fadeInOnScroll();
  
    // Fade in on scroll
    window.addEventListener("scroll", fadeInOnScroll);
});
