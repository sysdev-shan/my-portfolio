// clickable skill bars in the hero

const skillRows = document.querySelectorAll(".skill-row");
const skillNote = document.querySelector("#skill-note");

function selectSkill(chosenRow) {
  skillRows.forEach(function (row) {
    row.setAttribute("aria-pressed", row === chosenRow ? "true" : "false");
  });
  skillNote.textContent = chosenRow.dataset.note;
}

skillRows.forEach(function (row) {
  row.addEventListener("click", function () {
    selectSkill(row);
  });
});

selectSkill(skillRows[0]); // first skill selected by default
