// --------- hamburger menu -----------
document.addEventListener("DOMContentLoaded", () => {
  const humBtn = document.querySelector(".hum-btn");
  const headerMenu = document.querySelector(".header-list");

  humBtn.addEventListener("click", () => {
    humBtn.classList.toggle("open");
    headerMenu.classList.toggle("header-list-open");
  });
});
// --------- hamburger menu -----------


const darkThemeBtn = document.querySelector('#dark-theme-button')
  const moonIcon = document.querySelector('.moon-icon')
  const themeBtn = document.querySelector('.theme-btn')
  const body = document.querySelector('body')
  const sectionTitle = document.querySelectorAll('.section-title')
  const header = document.querySelector('header')
  const headerList = document.querySelectorAll('.header-list-a')
  const headerHam = document.querySelectorAll('.header-list-open')
  themeBtn.addEventListener('click', function() {
    themeBtn.classList.toggle('dark-theme-icon')
    body.classList.toggle('dark-theme')
    header.classList.toggle('dark-theme-header')
    // headerHam.classList.toggle('dark-theme-header')
    sectionTitle.forEach(function(title) {
      title.classList.toggle('dark-theme-section-title')
    })
    headerList.forEach(function(title) {
      title.classList.toggle('dark-theme-header-li-a')
    })

  })