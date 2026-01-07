export default function accordion() {
  const accordion = document.querySelectorAll(".accordion");

  accordion.forEach((item) => {
    item.addEventListener("click", (e) => {
      const target = e.target;
      const parent = target.closest(".accordion");

      if (!parent.classList.contains("open")) {
        parent.classList.add("open");
      } else {
        if (!target.closest(".accordion__body")) {
          parent.classList.remove("open");
        }
      }
    });
  });
}
