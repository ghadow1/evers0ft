//..Current slider index
var slideIndex = 0;

//..Get the slides
let slides = document.getElementsByClassName("headerSlides");

//..Startup
loop();

//..Timed rotation
function loop() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex - 1].style.display = "block";
  //..Pause then do the same action (a loop)
  setTimeout(loop, 38000);
}

//..Update current slide
function update() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
}

//..Check slide index before updating
function verify() {
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
}

//..Previous button
function decrement() {
  slideIndex = (slideIndex - 1);
  verify();
  update();
}

//..Next button
function increment() {
  slideIndex = (slideIndex + 1);
  verify();
  update();
}