let dice = document.querySelector("img")
let diceImg = ["dice-1.png","dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"]
let button = document.querySelector("button")

function diceThrow(){
  let random = Math.floor(Math.random() * diceImg.length)

  dice.classList.add('dice-animate');
  
  setTimeout(() => {
    dice.classList.remove('dice-animate')
    dice.src = diceImg[random]
  }, 500)  
}