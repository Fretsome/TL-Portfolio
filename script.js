function myFunction() {
    var x = document.getElementById("burger-items");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  let slideIndex = 0;
  let slides = document.getElementsByClassName("quote");
  
  document.addEventListener("DOMContentLoaded", function() {
      showSlides();
  });
  
  function currentSlide(n) {
      showSlides((slideIndex = n - 1));
  }
  
  function showSlides() {
      let i;
      let dots = document.getElementsByClassName("dot");
  
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
  
      if (slideIndex >= slides.length) {
          slideIndex = 0;
      }
  
      if (slideIndex < 0) {
          slideIndex = slides.length - 1;
      }
  
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
  
      slides[slideIndex].style.display = "block";
      dots[slideIndex].className += " active";
  }
  