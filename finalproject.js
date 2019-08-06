/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

 // add everything under the same navbar format & make it responsive

function reloadPage() {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
 }
}

function openState(evt, stateName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(stateName).style.display = "block";
  evt.currentTarget.className += " active";
}

// slideshow of quotes on news page
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var j;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (j = 0; j < slides.length; j++) {
      slides[j].style.display = "none";
    }
    for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function openClinic(evt, stateName) {
  // Declare all variables
  var k, clinictabcontent, clinictablinks;

  // Get all elements with class="tabcontent" and hide them
  clinictabcontent = document.getElementsByClassName("clinictabcontent");
  for (k = 0; k < clinictabcontent.length; k++) {
    clinictabcontent[k].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  clinictablinks = document.getElementsByClassName("clinictablinks");
  for (k = 0; k < clinictablinks.length; k++) {
    clinictablinks[k].className = clinictablinks[k].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(stateName).style.display = "block";
  evt.currentTarget.className += " active";
}
