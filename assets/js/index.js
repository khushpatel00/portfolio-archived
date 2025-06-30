const headerElement = document.querySelector("header");
function updateHeaderBackground() {
  const headerRect = headerElement.getBoundingClientRect();
  if (headerRect.top <= 20) {
    headerElement.classList.add("headerGlass");
    headerElement.classList.remove("headerTransparent");
  } else {
    headerElement.classList.add("headerTransparent");
    headerElement.classList.remove("headerGlass");
  }
}
window.addEventListener("scroll", updateHeaderBackground);
document.addEventListener("DOMContentLoaded", updateHeaderBackground);

const iFrameOpen = function () {
  iFrameElementCoffeeHead = document.getElementById("openSiteIframeCoffee");
  iFrameElementCoffee = document.getElementById("WebPreviewCoffee");
  iFrameImageCoffee = document.getElementById("coffeeImageIframe");
  iFrameContentCoffee = document.getElementsByClassName("project-content-coffee");

  iFrameElementDekoroHead = document.getElementById("openSiteIframeDekoro");
  iFrameElementDekoro = document.getElementById("WebPreviewDekoro");
  iFrameImageDekoro = document.getElementById("DekoroImageIframe");
  iFrameContentDekoro = document.getElementsByClassName("project-content-dekoro");

  iFrameElementA2ZHead = document.getElementById("openSiteIframeA2Z");
  iFrameElementA2Z = document.getElementById("WebPreviewA2Z");
  iFrameImageA2Z = document.getElementById("A2ZImageIframe");
  iFrameContentA2Z = document.getElementsByClassName("project-content-a2z");

  iFrameElementNestifyHead = document.getElementById("openSiteIframeNestify");
  iFrameElementNestify = document.getElementById("WebPreviewNestify");
  iFrameImageNestify = document.getElementById("NestifyImageIframe");
  iFrameContentNestify = document.getElementsByClassName("project-content-Nestify");

  // revertIFrame = document.getElementsByClassName("revertIFrame");
  iFrameElementCoffeeHead.onclick = function () {
    iFrameElementCoffeeHead.classList.remove("col-lg-6");
    iFrameElementCoffeeHead.classList.add("col-12", "mx-auto", "mt-5", "ps-5");
    iFrameElementCoffee.classList.remove("h-0");
    iFrameImageCoffee.classList.add("d-none");  
    iFrameContentCoffee.classList.add("mx-auto");
    // revertIFrame.classList.add("d-flex","text-danger");
    // revertIFrame.classList.remove("d-none");
  };
  iFrameElementDekoroHead.onclick = function () {
    iFrameElementDekoroHead.classList.remove("col-lg-6");
    iFrameElementDekoroHead.classList.add("col-12", "mx-auto", "mt-5", "ps-5");
    iFrameElementDekoro.classList.remove("h-0");
    iFrameImageDekoro.classList.add("d-none");
    // revertIFrame.classList.add("d-flex","text-danger");
    // revertIFrame.classList.remove("d-none");
  };
  iFrameElementA2ZHead.onclick = function () {
    iFrameElementA2ZHead.classList.remove("col-lg-6");
    iFrameElementA2ZHead.classList.add("col-12", "mx-auto", "mt-5", "ps-5");
    iFrameElementA2Z.classList.remove("h-0");
    iFrameImageA2Z.classList.add("d-none");
    // revertIFrame.classList.add("d-flex","text-danger");
    // revertIFrame.classList.remove("d-none");
  };
  iFrameElementNestifyHead.onclick = function () {
    iFrameElementNestifyHead.classList.remove("col-lg-6");
    iFrameElementNestifyHead.classList.add("col-12", "mx-auto", "mt-5", "ps-5");
    iFrameElementNestify.classList.remove("h-0");
    iFrameImageNestify.classList.add("d-none");
    // revertIFrame.classList.add("d-flex","text-danger");
    // revertIFrame.classList.remove("d-none");
  };

  // revertIFrame.onclick = function(){
  //     iFrameElement.classList.add("col-lg-6","col-10");
  //     iFrameElement.classList.remove("col-lg-10","col-10");
  //     iFrameElementCoffee.classList.add("d-none");
  //     revertIFrame.classList.remove("d-flex");
  //     revertIFrame.classList.add("d-none");
  // }
};
document.addEventListener("DOMContentLoaded", iFrameOpen);