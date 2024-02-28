// Function to check if element is in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Function to run when scrolling
function checkVisibility() {
  // Select specific elements to check if they are in the viewport
  document.querySelectorAll("body *").forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("is-visible");
    } else {
      item.classList.remove("is-visible"); // Remove class if element is out of view
    }
  });
}

// Listen for scroll events
window.addEventListener("scroll", checkVisibility);

// Initial check in case elements are in viewport on page load
document.addEventListener("DOMContentLoaded", checkVisibility);
