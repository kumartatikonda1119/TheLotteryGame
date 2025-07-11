const pickElement = document.getElementById("pickingButton");
const res = document.getElementById("lotteryRes");
const boxContainer = document.getElementById("box");
const pop= new Audio('pop.wav')
const gameCompletion=new Audio('gameCompletion.wav');
const items = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
];
pickElement.addEventListener("click", () => {
  for (let i = 0; i < items.length; i++) {
    document.getElementById(i + 1).classList.remove("winning-box");
  }
  res.textContent = "Please Wait....";
  let secondsCount = 0;
  let prev=null;
  const intervalId = setInterval(() => {
    pop.pause();
    pop.currentTime=0;
    pop.play();
    for (let i = 0; i < items.length; i++) {
    document.getElementById(i + 1).classList.remove("winning-box", "highlighted-box");
    }
     if(prev) document.getElementById(prev).classList.remove('highlighted-box');
    secondsCount += 1;
    let randi = Math.floor(Math.random() * 50 + 1);
    prev=randi;
    document.getElementById(randi).classList.add('highlighted-box')
    if (secondsCount == 5) {
      let randomNum = Math.floor(Math.random() * 50 + 1);
      res.textContent = `You have got ${randomNum} and you won ${ items[randomNum - 1] }`;
      document.getElementById(randomNum).classList.add("winning-box");
      gameCompletion.pause();
      gameCompletion.currentTime=0;
      gameCompletion.play();
      if(prev) document.getElementById(prev).classList.remove('highlighted-box');

      clearInterval(intervalId);
    }
  }, 1000);


});


items.forEach((item, i) => {
  const boxElement = `<div class="box-card" id= ${i + 1}>${ i + 1 } . ${item}</div>`;
  console.log(boxElement);
  boxContainer.insertAdjacentHTML("beforeend", boxElement);
});
