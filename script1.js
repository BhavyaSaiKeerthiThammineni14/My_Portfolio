document.addEventListener("DOMContentLoaded", function() {
  const achievementImages = document.querySelectorAll(".achievement-image img");
  const certificationImages = document.querySelectorAll(".certification-image img");
  const lightboxContainer = document.querySelector(".lightbox-container");
  const enlargedAchievement = document.querySelector(".enlarged-achievement");
  const enlargedCertification = document.querySelector(".enlarged-certification");
  const closeLightbox = document.getElementById("close-lightbox");

  achievementImages.forEach(image => {
    image.addEventListener("click", function(e) {
      enlargedAchievement.src = e.target.src;
      lightboxContainer.style.display = "flex";
    });
  });

  certificationImages.forEach(image => {
    image.addEventListener("click", function(e) {
      enlargedCertification.src = e.target.src;
      lightboxContainer.style.display = "flex";
    });
  });

  closeLightbox.addEventListener("click", function() {
    lightboxContainer.style.display = "none";
  });
});
