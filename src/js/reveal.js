// fade things in when they scroll into view

const revealItems = document.querySelectorAll(".reveal, .photo-reveal");

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target); // only once
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach(function (item) {
  revealObserver.observe(item);
});
