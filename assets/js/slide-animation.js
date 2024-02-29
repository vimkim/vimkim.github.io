// Function to check if element is in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  console.log(rect);
  return rect.top <= window.innerHeight + 100 && rect.bottom >= -100;
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

let checkVisibilityDebounced;

function debounce(func, wait, immediate) {
  return function () {
    const context = this,
      args = arguments;
    clearTimeout(checkVisibilityDebounced);
    checkVisibilityDebounced = setTimeout(function () {
      checkVisibilityDebounced = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !checkVisibilityDebounced) {
      func.apply(context, args);
    }
  };
}

// Throttle scroll event
window.addEventListener("scroll", debounce(checkVisibility, 20));

// Initial check in case elements are in viewport on page load
document.addEventListener("DOMContentLoaded", checkVisibility);
