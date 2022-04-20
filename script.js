const moreLinkButton = document.querySelector(".main-nav-more-button");
const moreLinkSymbol = document.querySelector("#more-symbol");
const dropoutDiv = document.querySelector(".dropout-nav");
const mainNav = document.querySelector(".main-nav");
const dropoutWrapper = document.querySelector(".dropout-nav-wrapper");
const stickyNav = document.querySelector(".sticky-nav");
const titleImage = document.querySelector(".title-image");
const header = document.querySelector(".header");

dropoutDiv.style.display = "none";

function toggleDropdown() {
  if (dropoutDiv.style.display === "none") {
    console.log("Open");
    moreLinkSymbol.innerHTML = "-";
    mainNav.style.border = "none";
    dropoutWrapper.style.borderBottom = "2px solid #e7e5e0";
    dropoutDiv.style.display = "block";
  } else {
    console.log("Close");
    dropoutDiv.style.display = "none";
    moreLinkSymbol.innerHTML = "+";
  }
}

moreLinkButton.addEventListener("click", toggleDropdown);

window.addEventListener("scroll", stickyMove);

let lastScroll = window.scrollY;

function stickyMove() {
  const stickyNavHeight = stickyNav.offsetHeight;

  if (window.scrollY > header.offsetHeight + stickyNavHeight * 2) {
    console.log("works");
    stickyNav.style.transform = "translateY(-61px)";
  }

  if (window.scrollY < lastScroll) {
    stickyNav.style.transform = "translateY(0px)";
  }
  lastScroll = window.scrollY;
}
