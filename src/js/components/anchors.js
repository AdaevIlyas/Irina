export default function anchors() {
  const points = document.querySelectorAll("[data-anchors-point]");
  const container = document.querySelector(".js-anchors-list");

  if (!points.length || !container) return;

  // Clear container
  container.innerHTML = "";

  const anchorsMap = new Map();

  points.forEach((point) => {
    const anchor = document.createElement("div");
    anchor.classList.add("anchors__item");

    anchor.addEventListener("click", () => {
      point.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    container.appendChild(anchor);
    anchorsMap.set(point, anchor);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          container.querySelectorAll(".anchors__item").forEach((el) => {
            el.classList.remove("active");
          });

          const activeAnchor = anchorsMap.get(entry.target);
          if (activeAnchor) {
            activeAnchor.classList.add("active");
          }
        }
      });
    },
    {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }
  );

  points.forEach((point) => observer.observe(point));
}
