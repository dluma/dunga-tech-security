// Replace with the email address where you want to receive customer enquiries.
const BUSINESS_EMAIL = "Artbydunga@email.com";
const menuButton = document.querySelector(".menu");
const nav = document.querySelector("header nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
document.querySelectorAll(".filters button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filters button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const filter = button.dataset.filter;
  document.querySelectorAll(".products article").forEach(card => card.classList.toggle("hide", filter !== "all" && card.dataset.category !== filter));
}));
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("quoteForm").addEventListener("submit", event => {
  event.preventDefault();
  if (BUSINESS_EMAIL === "yourbusiness@email.com") {
    alert("Please add your business email in script.js before using the enquiry form.");
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Website enquiry: ${data.get("interest")}`);
  const body = encodeURIComponent(`Name: ${data.get("name")}\nContact: ${data.get("contact")}\nInterest: ${data.get("interest")}\n\nMessage:\n${data.get("message")}`);
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
