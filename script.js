document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.header-bar__navigation a');

    // Attach click event listeners to each link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetHref = link.getAttribute('href');

            if (targetHref.startsWith('/')) {
                window.location.href = targetHref;
            } else {
                var targetSection = document.querySelector(targetHref);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

function goBack() {
    window.history.back();
}

const btn = document.querySelector(".dropdown-btn");
const content = document.querySelector(".dropdown-content");
const items = document.querySelectorAll(".dropdown-item");

btn.addEventListener("click", () => {
content.style.display = content.style.display === "block" ? "none" : "block";
});

items.forEach(item => {
item.addEventListener("click", () => {
    btn.textContent = item.querySelector("strong").textContent;
    content.style.display = "none";
});
});