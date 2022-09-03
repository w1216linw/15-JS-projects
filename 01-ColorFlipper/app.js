const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

///arrow function
//get random number between 0 - 3 
const getRandom = () => Math.floor(Math.random() * colors.length);

btn.addEventListener('click', function(){

  const randomNumber = getRandom();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})
