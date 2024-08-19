'use strict';


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

windows.addEventListener("scroll", e => {
    $header.classList[windows.scrollY > 50 ? "add" : "remove"]("active");
});