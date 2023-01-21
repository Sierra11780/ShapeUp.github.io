let navBtn = document.getElementById("navBtn");
let closeBtn = document.getElementById("closeBtn");

navBtn.onclick = () => {
  navContent.classList.replace("translate-x-full", "translate-x-0");
};
closeBtn.onclick = () => {
  navContent.classList.replace("translate-x-0", "translate-x-full");
};

let navLinks = Array.from(document.querySelectorAll(".nav-links a"));

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  });
});
