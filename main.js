// Get DOM elements
const links = document.querySelector('.footer__links');

// Assign global variables
let hover = false;

// Functionality
const bounceLink = (link) => {
    hover = true;
    setTimeout(function() {
        if (!link.classList.value.includes('fa-flip') && hover) {
            link.classList.add('fa-flip')
        }
      }, 300);
}

const removeBounce = (link) => {
    hover = false;
    if (link.classList.value.includes('fa-flip') && !hover) {
        link.classList.remove('fa-flip')
    }
}

// List of event listeners
links.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'I') {
        bounceLink(event.target);
    }
});

links.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'I') {
        removeBounce(event.target);
    }
})