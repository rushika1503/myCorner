export default function initNotes() {
    const textarea = document.getElementById("myNotes");
    const wordCount = document.getElementById("wordCount");

    if (textarea && wordCount) {
        textarea.addEventListener("input", () => {
            const words = textarea.value.trim().split(/\s+/).filter(Boolean);
            wordCount.textContent = words.length;
        });
    }
    const starButton = document.getElementById("starButton");

  // Load previous state from localStorage
  const isStarred = localStorage.getItem("isStarred") === "true";
  if (isStarred) {
    starButton.classList.add("starred");
    starButton.classList.replace("far", "fas"); // filled star
  }

  // Toggle star on click
  starButton.addEventListener("click", () => {
    const isNowStarred = starButton.classList.toggle("starred");
    if (isNowStarred) {
      starButton.classList.replace("far", "fas");
    } else {
      starButton.classList.replace("fas", "far");
    }
    localStorage.setItem("isStarred", isNowStarred);
  });


 

textarea.addEventListener("input", () => {
  textarea.style.height = "auto"; // Reset height
  textarea.style.height = textarea.scrollHeight + "px"; // Expand to content height
});
}
