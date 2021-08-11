const images = ["1.jpg", "2.jpg", "3.jpg"];
const bgimg = document.querySelector("body");

bgimg.style.backgroundImage = "url('img/" + images[Math.floor(Math.random() * images.length)] + "')";