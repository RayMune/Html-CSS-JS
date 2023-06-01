
/*
This JavaScript file is for the HTML file provided in the prompt.
It adds creative and interactive functionality to the web page.
*/

// Function to change the background color randomly
function changeBackgroundColor() {
  var colors = ['#ff6699', '#99ff99', '#6699ff', '#ffff99', '#ff99ff', '#99ffff'];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to animate the logo
function animateLogo() {
  var logo = document.querySelector('.banner');
  logo.classList.add('animated');
  setTimeout(function() {
    logo.classList.remove('animated');
  }, 1000);
}

// Add event listeners to buttons
var viewMoreBtn = document.querySelector('.content button:nth-child(1)');
var subscribeBtn = document.querySelector('.content button:nth-child(2)');

viewMoreBtn.addEventListener('click', function() {
  alert('View more button clicked!');
});

subscribeBtn.addEventListener('click', function() {
  alert('Subscribe button clicked!');
});

// Execute functions on page load
window.addEventListener('load', function() {
  changeBackgroundColor();
  animateLogo();
});
