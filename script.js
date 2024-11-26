
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
  "images/cover.jpg",         // Single page image
  "images/entry1.jpg",        // Entry 1 image
  "images/entry2.jpg",        // Entry 2 image
  "images/entry3.jpg",        // Entry 3 image
  "images/entry4.jpg",        // Entry 4 image
  "images/entry5.jpg",        // Entry 5 image
  "images/entry6.jpg",        // Entry 6 image
  "images/entry7.jpg",        // Entry 7 image
  "images/entry8.jpg"         // Entry 8 image
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
    singlePage.classList.add("active");
    splitPage.classList.remove("active");

    // Update title text and image
    pageText.textContent = current.content;
    const titlePageImage = document.getElementById("titlePageImage");
    titlePageImage.src = images[currentPage] || ""; // Set the title page image
  } else if (current.type === "split") {
    // Show split-page layout
    singlePage.classList.remove("active");
    splitPage.classList.add("active");

    pageTitle.textContent = current.title;
    entryText.textContent = current.text;
    uploadedImage.src = images[currentPage] || ""; // Set the left-page image
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

// Initialize the first page
renderPage();

