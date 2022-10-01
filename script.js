const colors = ['red', 'blue', 'orange', 'yellow', 'green', '#000', '#fff', '#808080'];
var optColors =  colors;
const menuBtn = document.getElementsByClassName('menu-openbtn')[0];
const main = document.getElementsByClassName('main')[0];
const colorPoint = document.querySelector('.color');
function pickColor () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color =  colors[randomIndex];
  main.style.backgroundColor = color;
  colorPoint.innerText = color;
}
menuBtn.addEventListener('click', () => {
  document.body.classList.toggle('nav-active');
})