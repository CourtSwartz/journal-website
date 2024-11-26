const pages = [
  "In the Shadow of Winter: Notes on Gender, Culture, and Self.",
  "This is the second page. You can add an image in the middle.",
  "Keep writing your thoughts and upload more images.",
  "You're on the last page. Keep journaling!"
];

const images = [
  "images/Genly AI 01.jpeg", // Replace with the actual path or URL to your image
  "image2.jpg",
  "image3.jpg",
  "image4.jpg"
];

let currentPage = 0;

const pageText = document.getElementById("pageText");
const uploadedImage = document.getElementById("uploadedImage");

// Initialize the first page
pageText.textContent = pages[currentPage];
uploadedImage.src = images[currentPage]; // Set the initial image

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    pageText.textContent = pages[currentPage];
    updateImage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pageText.textContent = pages[currentPage];
    updateImage();
  }
}

function loadImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      images[currentPage] = e.target.result; // Save the uploaded image for the current page
      uploadedImage.src = e.target.result; // Display the uploaded image
    };
    reader.readAsDataURL(file);
  }
}

function updateImage() {
  uploadedImage.src = images[currentPage] || ""; // Display the image for the current page or clear if none
}
