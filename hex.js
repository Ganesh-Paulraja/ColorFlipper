const colorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'f']
const menuBtn = document.getElementsByClassName('menu-openbtn')[0];
const main = document.getElementsByClassName('main')[0];
const colorPoint = document.querySelector('.color');
function pickColor () {
  const Random = () => {
    return Math.floor(Math.random() * colorCode.length);
  }
  const color = `#${colorCode[Random()]}${colorCode[Random()]}${colorCode[Random()]}${colorCode[Random()]}${colorCode[Random()]}${colorCode[Random()]} `;
  main.style.backgroundColor = color;
  colorPoint.innerText = color;
}
menuBtn.addEventListener('click', () => {
  document.body.classList.toggle('nav-active');
})