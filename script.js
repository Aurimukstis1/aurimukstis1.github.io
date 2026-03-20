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

