
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".js-hide");

btn.addEventListener("click", function () {
    if (form.classList.contains('js-hide')) {
        form.classList.remove('js-hide');
        btn.textContent = "Close";
    } else {
        form.classList.add('js-hide');
        btn.textContent = "Share a fact";
    }
});