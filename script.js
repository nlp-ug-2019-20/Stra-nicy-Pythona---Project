// active tab
function setActive() {
    aObj = document.getElementById('topnav').getElementsByTagName('a');
    for(i=0;i<aObj.length;i++) { 
        if(document.location.href.indexOf(aObj[i].href)>=0) {
            aObj[i].className='active';
        }
    }
}

window.onload = setActive;

//Slideshow
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined) {n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 5000);
}

//Get a random meme
document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    if (!event.target.matches("#button")) return;
  
    fetch("https://meme-api.herokuapp.com/gimme")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.url);
            document.getElementById('randomMeme').src = data.url;
        })
    });