const pages = [
  "In the Shadow of Winter: Notes on Gender, Culture, and Self.",
  "This is the second page. You can add an image in the middle.",
  "Keep writing your thoughts and upload more images.",
  "You're on the last page. Keep journaling!"
];

let currentPage = 0;

const pageText = document.getElementById("pageText");
const uploadedImage = document.getElementById("uploadedImage");

// Initialize the first page
pageText.textContent = pages[currentPage];

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    pageText.textContent = pages[currentPage];
    clearImage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pageText.textContent = pages[currentPage];
    clearImage();
  }
}

function loadImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function clearImage() {
  uploadedImage.src = "";
}
