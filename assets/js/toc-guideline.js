document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".table-of-contents li a");
  const headers = Array.from(document.querySelectorAll("h2"));

  function changeLinkState() {
    let index = -1; // Start with -1 to indicate no headers are past the scroll point
    let scrollPosition = window.scrollY + 50; // Adjust based on your fixed header or offset

    headers.forEach((header, i) => {
      // Log the header and its offset for debugging
      // console.log(`Header ${i}: ${header.offsetTop}, Scroll: ${scrollPosition}`);

      if (scrollPosition >= header.offsetTop) {
        index = i;
      }
    });

    // Log the index for debugging
    // console.log(`Active index: ${index}`);

    navLinks.forEach((link, i) => {
      if (i === index) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", changeLinkState);
  changeLinkState(); // Call initially to set the active section
});
