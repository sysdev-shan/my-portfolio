// copy the email to the clipboard

const copyButton = document.querySelector("#copy-email");
const copySource = document.querySelector("[data-copy-source]");

copyButton.addEventListener("click", function () {
  const email = copySource.textContent.replace("$", "").trim();

  if (navigator.clipboard) {
    navigator.clipboard.writeText(email);
  }

  copyButton.textContent = "Copied";
  setTimeout(function () {
    copyButton.textContent = "Copy";
  }, 1800);
});
