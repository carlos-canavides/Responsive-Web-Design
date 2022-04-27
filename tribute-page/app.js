const header = document.querySelector("header");
const toggleBtn = document.querySelector(".toggle-btn");

/* ---------- Stichy Navbar ---------- */

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

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