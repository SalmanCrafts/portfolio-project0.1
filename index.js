const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const emailid = document.querySelector("#Contact_emailid");
const Numberid = document.querySelector("#Contact_Numberid");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

emailid.addEventListener("click", () => {
  let emailaddress = "salmandev.vlr@gmail.com";
  navigator.clipboard
    .writeText(emailaddress)
    .then(() => alert("Email address Copied!"));
});
Numberid.addEventListener("click", () => {
  let PhoneNumber = "8220227639";
  navigator.clipboard
    .writeText(PhoneNumber)
    .then(() => alert("Phone Number Copied!"));
});
// Function to handle smooth scrolling
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTime = null;

  // Animation function for smooth scrolling
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const scrollAmount = easeInOutQuad(
      timeElapsed,
      startPosition,
      distance,
      duration
    );
    window.scrollTo(0, scrollAmount);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    smoothScroll(targetId);
  });
});
