// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    const mainWrapper = document.getElementById('main-wrapper');
  
    // Ensure the element exists before trying to add the event listener
    if (mainWrapper) {
      window.addEventListener('scroll', function() {
        // Get the vertical scroll position
        let scrollPosition = window.pageYOffset;
  
        // Calculate the new background position. 
        // The 0.4 means the background scrolls at 40% of the speed.
        // You can change this value to anything between 0 (fixed) and 1 (normal).
        let newPosition = '0 ' + (scrollPosition * 0.75) + 'px';
  
        // Apply the new position to the background
        mainWrapper.style.backgroundPosition = newPosition;
      });
    }
  });