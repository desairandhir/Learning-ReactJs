const leftBasket = document.querySelector(".basket1 span");
const rightBasket = document.querySelector(".basket2 span");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

let totalApples = 10;
let secondBasketApple = 0;
let leftBasketApple = totalApples - secondBasketApple;

leftBasket.innerHTML = leftBasketApple;
rightBasket.innerHTML = secondBasketApple;

rightArrow.addEventListener("click", () => {
  if (leftBasketApple > 0) {
    leftBasketApple--;
    leftBasket.innerHTML = leftBasketApple;
    secondBasketApple++;
    rightBasket.innerHTML = secondBasketApple;
  }
});

leftArrow.addEventListener("click", () => {
  if (secondBasketApple > 0) {
    secondBasketApple--;
    rightBasket.innerHTML = secondBasketApple;
    leftBasketApple++;
    leftBasket.innerHTML = leftBasketApple;
  }
});
