"use strict";

/**
 * navbar toggle in mobile
 */

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

/*
 * Header scroll state
 */

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", (e) => {
  $header.classList[window.scrollX > 50 ? "add" : "remove"];
});

const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");
$toggleBtns.forEach(($toggleBtn) => {
  $toggleBtn.addEventListener("click", () => {
    $toggleBtn.classList.toggle("active");
  });
});

const playButton = document.querySelector(".play-btn");
const video = document.querySelector("#ytVideo");
const videoCard = document.querySelector(".video-card");
const isVideoPlaying = (video) =>
  !!(
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  );

playButton.addEventListener("click", (event) => {
  if (!isVideoPlaying(video)) {
    video.play();
    playButton.style.visibility = "hidden";
  } else {
    video.pause();
    playButton.style.visibility = "visible";
  }
});

videoCard.addEventListener("mouseover", () => {
  playButton.style.visibility = "visible";
});
videoCard.addEventListener("mouseleave", () => {
  playButton.style.visibility = "hidden";
});
