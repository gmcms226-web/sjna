const programButtons = document.querySelectorAll(".program-tabs button");
const programPanels = document.querySelectorAll(".program-panel");

programButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const target = button.dataset.program;

    programButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    programPanels.forEach(function (panel) {
      panel.classList.remove("active");
    });

    const targetPanel = document.querySelector('.program-panel[data-panel="' + target + '"]');

    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});

