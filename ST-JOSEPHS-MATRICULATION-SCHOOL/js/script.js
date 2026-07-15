// Preloader
window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
});

// Dark Mode
const darkBtn = document.getElementById("darkMode");

if (darkBtn) {
    darkBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");
    });
}