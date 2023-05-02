// Get DOM elements
const links = document.querySelector(".footer__links");

// Assign global variables
const flipTimeouts = new Map();

// Functionality
const bounceLink = (link) => {
  if (!flipTimeouts.has(link)) {
    const timeoutId = setTimeout(function () {
      if (hover && !link.classList.contains("fa-flip")) {
        link.classList.add("fa-flip");
      }
      flipTimeouts.delete(link);
    }, 300);
    flipTimeouts.set(link, timeoutId);
  }
};

const removeBounce = (link) => {
  const timeoutId = flipTimeouts.get(link);
  if (timeoutId) {
    clearTimeout(timeoutId);
    flipTimeouts.delete(link);
  }
  if (!hover && link.classList.contains("fa-flip")) {
    link.classList.remove("fa-flip");
  }
};

// List of event listeners
links.addEventListener("mouseover", (event) => {
  if (event.target.tagName === "I") {
    hover = true;
    bounceLink(event.target);
  }
});

links.addEventListener("mouseout", ({ target }) => {
  if (target.tagName === "I") {
    hover = false;
    removeBounce(event.target);
  }
});
