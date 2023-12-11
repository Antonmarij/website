window.onscroll = function() {amFunction()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function amFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}





function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
