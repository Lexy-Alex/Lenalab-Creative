const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("Booking section coming soon!");
});

window.addEventListener("load", () => {

  const title = document.querySelector("h1");

  title.style.opacity = "1";
  title.style.transform = "translateY(0)";

});
const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {

  cards.forEach((card, index) => {
s
    setTimeout(() => {

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }, index * 300);

  });

});
const galleryItems = document.querySelectorAll(".gallery-item");

window.addEventListener("load", () => {

  galleryItems.forEach((item, index) => {

    setTimeout(() => {

      item.style.opacity = "1";
      item.style.transform = "translateY(0)";

    }, index * 300);

  });

});
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    nav.style.background = "rgba(0,0,0,0.8)";
     nav.style.padding = "15px 50px";

  }else{

    nav.style.background = "rgba(0,0,0,0.3)";
    nav.style.padding = "20px 50px";
  }

});
const popup = document.querySelector(".popup");

const heroButton = document.querySelector(".hero button");

const closeBtn = document.querySelector(".close-btn");

heroButton.addEventListener("click", () => {

  popup.classList.add("active");

});

closeBtn.addEventListener("click", () => {

  popup.classList.remove("active");

});
document.documentElement.style.scrollBehavior = "smooth";
const bookingButtons = document.querySelectorAll(".book-now");

bookingButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const packageName = button.dataset.package;

    const message =
`Hello Lenslab Creative, I want to book the ${packageName} package`;

    const whatsappLink =
`https://wa.me/2348145999641?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");

  });

});
