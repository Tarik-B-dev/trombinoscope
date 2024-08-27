document.addEventListener("DOMContentLoaded", function () {
   const toggleButton = document.getElementById("switch-mode");
   toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");
      document.body.classList.toggle("dark-mode");
   });

   const bioButtons = document.querySelectorAll(".btn-bio");

   bioButtons.forEach((button) => {
      const card = button.closest(".card");
      const bioDiv = card.querySelector(".bio");
      const cardInfo = card.querySelector(".profil");

      bioDiv.style.display = "none";

      button.addEventListener("click", function () {
         if (bioDiv.style.display === "none" || bioDiv.style.display === "") {
            bioDiv.style.display = "flex";
            cardInfo.style.display = "none";
         } else {
            bioDiv.style.display = "none";
            cardInfo.style.display = "block";
         }
      });
   });
});
