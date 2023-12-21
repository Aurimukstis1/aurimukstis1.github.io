document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('.container-topheader-sticky a');

    // Attach click event listeners to each link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Get the target section from the link's href attribute
            var targetHref = link.getAttribute('href');

            // Check if the link starts with "/"
            if (targetHref.startsWith('/')) {
                // Handle normal links (starting with "/")
                window.location.href = targetHref; // Redirect to the specified URL
            } else {
                // Handle internal links (with "#")
                var targetSection = document.querySelector(targetHref);

                if (targetSection) {
                    // Scroll to the target section with smooth behavior
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

function goBack() {
    window.history.back();
}
