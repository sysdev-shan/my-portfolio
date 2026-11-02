// screenshot slider on the project cards, click a picture to enlarge it

const zoomDialog = document.querySelector("#zoom-modal");

document.querySelectorAll("[data-slider]").forEach(function (slider) {
  const slides = slider.querySelectorAll(".slide");
  const count = slider.querySelector(".slider-count");
  let current = 0;

  // show one picture, hide the rest, update the counter
  function show(number) {
    current = (number + slides.length) % slides.length; // wraps around
    slides.forEach(function (picture, index) {
      picture.hidden = index !== current;
    });
    count.textContent = current + 1 + " / " + slides.length + "  " + slides[current].dataset.caption;
  }

  slider.querySelector(".slider-prev").addEventListener("click", function () {
    show(current - 1);
  });
  slider.querySelector(".slider-next").addEventListener("click", function () {
    show(current + 1);
  });

  // arrow keys
  slider.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      show(current - 1);
    } else if (event.key === "ArrowRight") {
      show(current + 1);
    }
  });

  // click the picture to open it large
  slider.querySelector(".slider-stage").addEventListener("click", function () {
    const title = slider.closest(".project").querySelector("h3").textContent;
    document.querySelector("#zoom-title").textContent = title + ": " + slides[current].dataset.caption;
    document.querySelector("#zoom-img").src = slides[current].src;
    document.querySelector("#zoom-img").alt = slides[current].alt;
    zoomDialog.showModal();
  });

  show(0);
});
