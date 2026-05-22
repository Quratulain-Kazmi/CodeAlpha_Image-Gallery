const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

// Open Lightbox
function openLightbox(src){
  lightbox.style.display = "flex";
  lightboxImg.src = src;

  currentIndex = [...images].findIndex(img => img.src === src);
}

// Close Lightbox
function closeLightbox(){
  lightbox.style.display = "none";
}

// Next / Prev Buttons
function changeImage(direction){
  currentIndex += direction;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  lightboxImg.src = images[currentIndex].src;
}

// Filter Images
function filterImages(category){
  const galleryImages = document.querySelectorAll(".image");

  galleryImages.forEach(image => {
    if(category === "all" || image.classList.contains(category)){
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}