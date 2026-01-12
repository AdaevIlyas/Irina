export default function platform() {
  const checkboxs = document.querySelectorAll(".platform__radio");

  checkboxs.forEach((checkbox) => {
    const parent = checkbox.closest(".platform");
    const tariffs = parent?.closest(".tariffs");
    const special = parent?.closest(".special");

    checkbox.addEventListener("change", () => {
      checkbox.checked
        ? parent.classList.add("checked")
        : parent.classList.remove("checked");

      if (tariffs) {
        if (tariffs.classList.contains("checked")) {
          tariffs.classList.remove("checked");
        } else {
          tariffs.classList.add("checked");
        }
      }

      if (special) {
        if (special.classList.contains("checked")) {
          special.classList.remove("checked");
        } else {
          special.classList.add("checked");
        }
      }
    });
  });
}
