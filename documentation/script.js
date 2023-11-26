document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('.sidebar a');

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

    var textfields = document.querySelectorAll('.feed-text');
    
    function convertMarkdownToHTML(markdownText) {
        markdownText = markdownText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        markdownText = markdownText.replace(/\*(.*?)\*/g, '<em>$1</em>');

        markdownText = markdownText.replace(/\n/g, '<br>');

        return markdownText;
    }

    // Iterate through each text field
    textfields.forEach(function(textfield) {
        // Get the name within the text field
        var fieldName = textfield.textContent.trim(); // Assuming the name is directly within the text content

        // Assuming the text file has the same name with a '.md' extension (Markdown file)
        var mdFileName = fieldName + '.txt';

        // Fetch the content of the Markdown file
        fetch(mdFileName)
            .then(response => response.text())
            .then(markdownContent => {
                // Convert basic Markdown to HTML
                var htmlContent = convertMarkdownToHTML(markdownContent);

                // Set the content of the text field with the HTML content
                textfield.innerHTML = htmlContent;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});

function goBack() {
    window.history.back();
}