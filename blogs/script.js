document.addEventListener('DOMContentLoaded', function () {
    // Call the function for each blog post
    const blogContentElements = document.querySelectorAll('.blog-content');
    blogContentElements.forEach(fetchAndDisplayContent);
});

// Function to fetch content from a text file and update the specified element
function fetchAndDisplayContent(element) {
    const filePath = element.getAttribute('data-file');

    fetch(filePath)
    .then(response => response.text())
    .then(content => {
        // Split title and content
        const [titleLine, ...paragraphs] = content.split('\n');
        
        // Extract title from the title line
        const title = titleLine.replace('title:', '').trim();

        // Update title and content
        document.getElementById(element.id.replace('content', 'title')).textContent = title;
        element.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    })
    .catch(error => {
        console.error(`Error fetching content for ${filePath}:`, error);
    });
}

function goBack() {
    window.history.back();
}