
const pages = [
  { type: "single", content: "In the Shadow of Winter: \nNotes on Gender, Culture, and Self\n\nGenly Ai" },
  {
    type: "split",
    title: "Entry 1: Arrival on Gethen (Karhide)",
    text: "The cold was the first thing that struck me. Gethen, Winter, whatever you call it—it’s a planet defined by its chill, both in the air and in the people. I landed in Karhide, a nation as unfamiliar to me as its inhabitants. They greeted me politely enough, but their faces were unreadable. No markers of gender, no hints to cling to, only their androgyny staring back at me like a blank slate. It felt unnatural, though I suppose it’s my own assumptions that made it so.\n\nHere, gender does not mark one’s place in the world as it does on Earth. The absence of 'he' or 'she' among these people leaves me grasping for something familiar to hold on to. And yet, there’s something about them—unbothered by the divisions we hold so dear—that unnerves me."
  },
  {
    type: "split",
    title: "Entry 2: Initial Encounters with Estravan",
    text: "Estravan is a mystery. A noble, yet cast aside. A traitor, yet deeply loyal. At first, I couldn’t quite decide what to make of them. 'Him,' I called Estravan at first, though even now I see that term doesn’t fit.\n\nEstravan’s eyes held a kind of knowing that made me uneasy, as if they understood me better than I did myself. Their gestures were calm, deliberate, but I couldn’t pin down what they wanted or who they were. Without gender to define Estravan, I found myself disoriented. I could not rely on my usual assumptions to read their motives. It frustrated me.\n\nI wonder now if Estravan knew how much their presence challenged me, or if they simply existed as they always had—beyond my limited understanding of identity."
  },
  {
    type: "split",
    title: "Entry 3: Reflections on Gethenian Gender",
    text: "I have begun to see glimpses of the Gethenian world through their eyes, though it is a slow and humbling process. Gender here is situational, tied to kemmer—an event, not an identity. How does one exist in a state of constant potentiality? To me, it feels chaotic, undefined. To them, it is natural, even freeing.\n\nTheir language reflects this fluidity. There are no pronouns to divide the world into 'he' and 'she,' no societal roles predicated on gendered assumptions. And yet, they find meaning in relationships, in their shared humanity.\n\nAt times, I wonder whether our rigid binary is a strength or a weakness. The Gethenians’ adaptability hints at possibilities I cannot fully comprehend."
  },
  {
    type: "split",
    title: "Entry 4: Betrayal and Imprisonment",
    text: "Orgoreyn—what a land of contradictions. I thought I had found safety there, but safety was an illusion. Betrayed by those who claimed to be allies, I was cast into a cold, dark prison. Alone, surrounded by the weight of my failure, I had little to do but think.\n\nEstravan’s warnings echoed in my mind. I hadn’t trusted them, not fully. Perhaps I couldn’t, because I couldn’t categorize them, couldn’t see them through the lens I used for everyone else. And yet, even as I languished in that cell, I began to wonder if it was my own biases that had truly imprisoned me."
  },
  {
    type: "split",
    title: "Entry 5: Journey Across the Ice",
    text: "Estravan came for me. Despite everything, they pulled me from the darkness, and together we crossed the ice. Days turned into weeks as we trudged through the frozen wasteland. The cold was unrelenting, but so was Estravan.\n\nTheir resilience amazed me. In the vast, unforgiving wilderness, Estravan became something more than a companion. They were a lifeline, a guide, a truth I hadn’t been ready to face.\n\nAs we journeyed, I began to see Estravan for who they truly were—not a man, not a woman, but a person of extraordinary depth and strength. It wasn’t their gender that defined them; it was their humanity."
  },
  {
    type: "split",
    title: "Entry 6: Estravan’s Sacrifice",
    text: "Estravan is gone.\n\nI cannot yet bring myself to write about the details. What I can say is this: they gave everything for me, for the mission, for the hope of understanding between our worlds.\n\nTheir death left a silence deeper than the ice itself. I had not realized, until that moment, how much I had come to rely on Estravan—not just as an ally, but as a friend.\n\nThey taught me what words could not."
  },
  {
    type: "split",
    title: "Entry 7: Reflection and Departure",
    text: "The journey is over. I am preparing to leave Winter, but it feels as though Winter will never leave me. I look at the Gethenians now and see not ambiguity, but complexity. Not strangeness, but beauty.\n\nEstravan’s sacrifice stays with me, a reminder of the strength that comes from embracing one’s truth, whatever form it takes. Their actions shattered the barriers I had built within myself, and I am left piecing together a new understanding of what it means to be human."
  },
  {
    type: "split",
    title: "Entry 8: Final Reflections",
    text: "Gender. Culture. Humanity.\n\nI arrived on Gethen believing I had answers, but I leave knowing I barely understood the questions. Gender, as I once knew it, feels irrelevant here. The Gethenians have shown me that identity is not fixed; it is fluid, situational, and deeply personal.\n\nEstravan’s face comes to mind as I write this, their eyes, their voice. I am reminded that what matters most is not what someone is, but who they are.\n\nIn the shadow of Winter, I have found truths I never thought to seek. Perhaps, in time, these truths will find a way to reshape my world as much as they have reshaped me."
  }
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

