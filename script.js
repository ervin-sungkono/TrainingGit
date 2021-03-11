var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("nav");
  if (prevScrollpos > currentScrollPos) {
    navbar.style.opacity = "1";
    navbar.style.top = "0";
  } else {
    navbar.style.opacity = "0";
    navbar.style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}

function ScrollPage(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
