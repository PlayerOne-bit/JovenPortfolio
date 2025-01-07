document.addEventListener("DOMContentLoaded", () => {
  const flipCard = document.querySelector(".flip-card");
  
  if (flipCard) {
    flipCard.addEventListener("click", () => {
      flipCard.classList.toggle("flipped");
    });
  } else {
    console.error("No flip-card element found!");
  }
});


