const header = document.querySelector("header");
const toggleBtn = document.querySelector(".toggle-btn");

/* ---------- Stichy Navbar ---------- */

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

function changeTheme() {
    if(!document.body.classList.contains("dark")) {
        document.body.classList.add("dark");
        toggleBtn.classList.replace("uil-moon", "uil-sun");
    }
    else {
        document.body.classList.remove("dark");
        toggleBtn.classList.replace("uil-sun", "uil-moon");
    }
}

toggleBtn.addEventListener("click", () => {
    changeTheme()
});