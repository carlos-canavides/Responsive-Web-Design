/* ------------------ DarkMode and LightMode ------------------ */
const toggleBtn = document.querySelector(".toggle-btn");
let firstTheme = localStorage.getItem("dark");
changeTheme(+firstTheme);
function changeTheme(isDark) {
    if(isDark) {
        document.body.classList.add("dark");
        toggleBtn.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("dark", 1);
    }
    else {
        document.body.classList.remove("dark");
        toggleBtn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);
    }
}
toggleBtn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"))
});