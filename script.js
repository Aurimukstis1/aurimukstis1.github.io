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

(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#bodyd");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();

function goBack() {
    window.history.back();
}
