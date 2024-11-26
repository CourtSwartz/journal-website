
const pages = [
  { type: "single", content: "In the Shadow of Winter: Notes on Gender, Culture, and Self." },
  { type: "split", title: "Entry 1: Arrival on Gethen (Karhide)", text: "Thoughts and reflections." },
  { type: "split", title: "Entry 2: Initial Encounters with Estravan", text: "A curious and enigmatic figure." },
  { type: "split", title: "Entry 3: Reflections on Gethenian Gender", text: "Exploring unique gender dynamics." },
  { type: "split", title: "Entry 4: Betrayal and Imprisonment", text: "Captured and betrayed in Orgoreyn." },
  { type: "split", title: "Entry 5: Journey Across the Ice", text: "Traversing the icy wilderness." },
  { type: "split", title: "Entry 6: Estravan’s Sacrifice", text: "A moment of ultimate selflessness." },
  { type: "split", title: "Entry 7: Reflection and Departure", text: "The journey ends; lessons remain." },
  { type: "split", title: "Entry 8: Final Reflections", text: "Gender, culture, and humanity." }
];

const images = [
  "", // No image for single page
  "images/Genly AI 01.jpeg", // Replace with actual paths
  "image2.jpg",
  "image3.jpg",
  "image4.jpg"
];

let currentPage = 0;

const pageText = document.getElementById("pageText");
const pageTitle = document.getElementById("pageTitle");
const entryText = document.getElementById("entryText");
const uploadedImage = document.getElementById("uploadedImage");
const singlePage = document.getElementById("singlePage");
const splitPage = document.getElementById("splitPage");

function renderPage() {
  const current = pages[currentPage];
  if (current.type === "single") {
    // Show single-page layout
    singlePage.style.display = "block";
    splitPage.style.display = "none";
    pageText.textContent = current.content;
  } else if (current.type === "split") {
    // Show split-page layout
    singlePage.style.display = "none";
    splitPage.style.display = "flex";
    pageTitle.textContent = current.title;
    entryText.textContent = current.text;
    uploadedImage.src = images[currentPage] || ""; // Set the image or clear it
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

function loadImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      images[currentPage] = e.target.result; // Save the uploaded image
      uploadedImage.src = e.target.result; // Display the uploaded image
    };
    reader.readAsDataURL(file);
  }
}

// Initialize the first page
renderPage();
