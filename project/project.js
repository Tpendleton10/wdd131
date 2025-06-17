// 1. Fire Safety Checklist
const safetyTips = [
  "Test smoke alarms monthly",
  "Replace batteries annually",
  "Keep flammable materials away from stoves",
  "Create and practice a fire escape plan",
  "Know how to use a fire extinguisher"
];

let completedTips = JSON.parse(localStorage.getItem("completedTips")) || [];

function renderChecklist() {
  const list = document.getElementById("checklist");
  if (!list) return; // Avoid errors on pages without checklist
  list.innerHTML = "";

  safetyTips.forEach((tip, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <label>
        <input type="checkbox" data-index="${index}" ${completedTips.includes(index) ? "checked" : ""}>
        ${tip}
      </label>
    `;
    list.appendChild(item);
  });
}

function handleChecklistClick(e) {
  if (e.target.tagName === "INPUT") {
    const index = parseInt(e.target.getAttribute("data-index"));
    if (e.target.checked) {
      completedTips.push(index);
    } else {
      completedTips = completedTips.filter(i => i !== index);
    }
    localStorage.setItem("completedTips", JSON.stringify(completedTips));
    checkCompletion();
  }
}

function checkCompletion() {
  const status = document.getElementById("checklist-status");
  if (!status) return;
  if (completedTips.length === safetyTips.length) {
    status.textContent = `🎉 Great job! You've completed all safety tips.`;
  } else {
    status.textContent = `${completedTips.length} of ${safetyTips.length} tips completed.`;
  }
}

// 2. Optional: Contact form submission handler
document.addEventListener("DOMContentLoaded", () => {
  renderChecklist();

  const checklistElement = document.getElementById("checklist");
  if (checklistElement) {
    checklistElement.addEventListener("change", handleChecklistClick);
    checkCompletion();
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting Las Vegas Fire and Rescue!");
      contactForm.reset();
    });
  }
});