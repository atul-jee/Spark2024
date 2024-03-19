document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slideshow-content');
    let index = 0;

    // Function to show next slide
    function showNextSlide() {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }

    // Automatically advance slides every 3 seconds
    setInterval(showNextSlide, 2000);
  });
  
  