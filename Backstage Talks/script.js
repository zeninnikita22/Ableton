const body = document.getElementsByTagName("BODY")[0];
const firstImg = document.querySelector(".first");
const secondImg = document.querySelector(".second");
const thirdImg = document.querySelector(".third");
const fourthImg = document.querySelector(".fourth");
const fifthImg = document.querySelector(".fifth");

// const bodyRect = document.body.getBoundingClientRect();
// const firstImgRect = firstImg.getBoundingClientRect();
// const firstImgOffset = firstImgRect.top - bodyRect.top;

window.addEventListener("scroll", function () {
  //   let firstImgCenter = firstImg.offsetTop + firstImg.offsetHeight / 2;
  let secondImgCenter = secondImg.offsetTop + secondImg.offsetHeight / 2;
  let thirdImgCenter = thirdImg.offsetTop + thirdImg.offsetHeight / 2;
  let fourthImgCenter = fourthImg.offsetTop + fourthImg.offsetHeight / 2;
  let fifthImgCenter = fifthImg.offsetTop + fifthImg.offsetHeight / 2;
  let scrolled = scrollY;
  let windowHeight = window.innerHeight;
  let lowerScrollPosition = scrolled + windowHeight;
  console.log("Position is " + lowerScrollPosition);
  //   console.log("1st image center " + fifthImgCenter);
  console.log("2nd image center " + secondImgCenter);
  console.log("3rd image center " + thirdImgCenter);
  console.log("4th image center " + fourthImgCenter);
  console.log("5th image center " + fifthImgCenter);

  if (lowerScrollPosition < secondImgCenter) {
    body.style.backgroundColor = "#00c1b5";
    // green first
  } else if (
    lowerScrollPosition >= secondImgCenter &&
    lowerScrollPosition < thirdImgCenter
  ) {
    body.style.backgroundColor = "#ff651a";
    // orange second
  } else if (
    lowerScrollPosition >= thirdImgCenter &&
    lowerScrollPosition < fourthImgCenter
  ) {
    body.style.backgroundColor = "#ffbe00";
    // yellow third
  } else if (
    lowerScrollPosition >= fourthImgCenter &&
    lowerScrollPosition < fifthImgCenter
  ) {
    body.style.backgroundColor = "#1d3fbb";
    // blue forth
  } else {
    body.style.backgroundColor = "#e30512";
    // red fifth
  }
});
// var h = window.innerHeight;
// console.log(h);
//   console.log("scrolled " + scrolled);
//   console.log("height of Window " + windowHeight);
//   console.log("lowerScroll at " + place);
//   console.log("5img center " + (fifthImg.offsetTop - fifthImg.offsetHeight));
