const btnContainer = document.querySelector(".btn-container");
const boxContainer = document.querySelector(".box-container");

btnContainer.addEventListener("click", function ({ target }) {
    const btn = target.closest(".btn");

    if (!btn) return;

    boxContainer.querySelectorAll(".box").forEach((box) => {
        if (box.dataset.box === btn.dataset.btn) {
            box.classList.toggle("open");
        } else {
            box.classList.remove("open");
        }
    });
});
