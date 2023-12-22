const Img = ["url(Markimoo.jpg)", "url(Noodle.jpg)", "url(Exit8.jpg)"];
const btn = document.getElementById("btn");
const Imgs = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomImg = getRandomNumber();
  // console.log(randomNumber);

 
  document.body.style.backgroundImage = Img[randomImg];
  Imgs.textContent = Img[randomImg];
});

function getRandomNumber() {
  return Math.floor(Math.random() * Img.length);
}