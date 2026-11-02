// footer year, and closing the dialogs

document.querySelector("#year").textContent = new Date().getFullYear();

const allDialogs = document.querySelectorAll("dialog");

allDialogs.forEach(function (dialog) {
  dialog.addEventListener("click", function (event) {
    const clickedBackground = event.target === dialog;
    const clickedCloseButton = event.target.closest("[data-close]");
    if (clickedBackground || clickedCloseButton) {
      dialog.close();
    }
  });
});
