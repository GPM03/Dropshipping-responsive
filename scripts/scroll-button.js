const scrollContainerSeller = document.querySelector(".plan__card-container--seller");
const leftScrollSeller = document.querySelector(".card__scroll-left--seller");
const rightScrollSeller = document.querySelector(".card__scroll-right--seller");

const scrollContainerDistributor = document.querySelector(".plan__card-container--distributor");
const leftScrollDistributor = document.querySelector(".card__scroll-left--distributor");
const rightScrollDistributor = document.querySelector(".card__scroll-right--distributor");

function checkScroll(leftButton, rightButton, scrollContainer) {
  return function() {
    const currentScroll = scrollContainer.scrollLeft;
    const scrollLength = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      rightButton.setAttribute("disabled", "true");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }
};

function leftScroll(scrollContainer) {
    return function() {
    scrollContainer.scrollBy({
      left: -400,
      behavior: "smooth"
    });
    }
}

function rightScroll(scrollContainer) {
  return function() {
    scrollContainer.scrollBy({
      left: 400,
      behavior: "smooth"
  });
  }
}

scrollContainerSeller.addEventListener("scroll", checkScroll(leftScrollSeller, rightScrollSeller, scrollContainerSeller));
window.addEventListener("resize", checkScroll(leftScrollSeller, rightScrollSeller, scrollContainerSeller));
checkScroll(leftScrollSeller, rightScrollSeller, scrollContainerSeller);

scrollContainerDistributor.addEventListener("scroll", checkScroll(leftScrollDistributor, rightScrollDistributor, scrollContainerDistributor));
window.addEventListener("resize", checkScroll(leftScrollDistributor, rightScrollDistributor, scrollContainerDistributor));
checkScroll(leftScrollDistributor, rightScrollDistributor, scrollContainerDistributor);

leftScrollSeller.addEventListener("click", leftScroll(scrollContainerSeller));
rightScrollSeller.addEventListener("click", rightScroll(scrollContainerSeller));

leftScrollDistributor.addEventListener("click", leftScroll(scrollContainerDistributor));
rightScrollDistributor.addEventListener("click", rightScroll(scrollContainerDistributor));