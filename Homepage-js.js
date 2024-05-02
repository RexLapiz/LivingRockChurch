window.addEventListener('load', function() {
    var mainContainerHeight = document.querySelector(".main_container").offsetHeight;
    var containerAboutChurch = document.querySelector(".container_about_church");
    containerAboutChurch.style.marginTop = mainContainerHeight + "px";
});
window.addEventListener('load', function() {
    var backgroundVideo = document.querySelector(".background-video");
    var mainContainer = document.querySelector(".main_container");
    var header = document.querySelector(".header");
    mainContainer.style.height = (backgroundVideo.offsetHeight - header.offsetHeight) + "px";
});

