const body = document.getElementsByTagName("BODY")[0];
const firstImg = document.querySelector(".first");
const secondImg = document.querySelector(".second");
const thirdImg = document.querySelector(".third");
const fourthImg = document.querySelector(".fourth");
const fifthImg = document.querySelector(".fifth");

window.addEventListener("scroll", function () {
  let secondImgCenter = secondImg.offsetTop + secondImg.offsetHeight / 2;
  let thirdImgCenter = thirdImg.offsetTop + thirdImg.offsetHeight / 2;
  let fourthImgCenter = fourthImg.offsetTop + fourthImg.offsetHeight / 2;
  let fifthImgCenter = fifthImg.offsetTop + fifthImg.offsetHeight / 2;
  let scrolled = scrollY;
  let windowHeight = window.innerHeight;
  let lowerScrollPosition = scrolled + windowHeight;

  if (lowerScrollPosition < secondImgCenter) {
    body.style.backgroundColor = "#00c1b5";
  } else if (
    lowerScrollPosition >= secondImgCenter &&
    lowerScrollPosition < thirdImgCenter
  ) {
    body.style.backgroundColor = "#ff651a";
  } else if (
    lowerScrollPosition >= thirdImgCenter &&
    lowerScrollPosition < fourthImgCenter
  ) {
    body.style.backgroundColor = "#ffbe00";
  } else if (
    lowerScrollPosition >= fourthImgCenter &&
    lowerScrollPosition < fifthImgCenter
  ) {
    body.style.backgroundColor = "#1d3fbb";
  } else {
    body.style.backgroundColor = "#e30512";
  }
});
