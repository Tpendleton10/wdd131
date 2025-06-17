// Fire Safety Checklist
const safetyTips = [
  "Test smoke alarms monthly",
  "Replace batteries annually",
  "Keep flammable materials away from stoves",
  "Create and practice a fire escape plan",
  "Know how to use a fire extinguisher"
];

// Load saved state or default
let completedTips = JSON.parse(localStorage.getItem("completedTips")) || [];

function renderChecklist() {
  const list = document.getElementById("checklist");
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
  if (completedTips.length === safetyTips.length) {
    status.textContent = `🎉 Great job! You've completed all safety tips.`;
  } else {
    status.textContent = `${completedTips.length} of ${safetyTips.length} tips completed.`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderChecklist();
  document.getElementById("checklist").addEventListener("change", handleChecklistClick);
  checkCompletion();
});
