document.addEventListener("DOMContentLoaded", init);

let logo;
let text;
let arrow;

function init() {
  logo = document.querySelector(".st1");
  text = document.querySelector("#logo_txt");
  arrow = document.querySelector('.arrow');

  logo.addEventListener("mouseover", over);
  logo.addEventListener("mouseout", out)
  arrow.addEventListener('mouseover', over)
  arrow.addEventListener('mouseover', out)
}

function over(event) {
  logo.classList.add("over-logo");
  text.classList.add("over-logo");
  arrow.classList.add('over-arrow')
}

function out(event) {
    logo.classList.remove('over-logo');
    text.classList.remove('over-logo');
    arrow.classList.remove('over-arrow')
}




