export default function tabs() {
  const tabs = document.querySelectorAll(".programms__tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const step = tab.dataset.step;
      const content = document.querySelector(
        `.programms__list[data-step-block="${step}"]`
      );

      tabs.forEach((item) => {
        item.classList.remove("active");
      });
      tab.classList.add("active");

      document.querySelectorAll(".programms__list").forEach((item) => {
        item.classList.remove("active");
      });
      content.classList.add("active");
    });
  });
}
