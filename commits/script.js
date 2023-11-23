document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch GitHub commit data
    async function fetchCommits() {
        const repoOwner = "Aurimukstis1";
        const repoName = "aurimukstis1.github.io";
        const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;
    
        try {
            const response = await fetch(apiUrl);
            const commits = await response.json();
            return commits;
        } catch (error) {
            console.error("Error fetching GitHub commits:", error);
        }
    }
    
    async function displayCommits() {
        const commitsContainer = document.getElementById("commits-container");
        console.log(commitsContainer);
        // Create cards for each commit
        (await fetchCommits()).forEach((commit) => {
            const commitLink = document.createElement("a");
            commitLink.href = commit.html_url;
    
            const commitCard = document.createElement("div");
            commitCard.classList.add("commits-card");
    
            const commitHeader = document.createElement("h2");
            commitHeader.classList.add("commits-header");
            commitHeader.textContent = commit.commit.message;
    
            const commitName = document.createElement("h3");
            commitName.classList.add("commits-name");
            commitName.textContent = commit.commit.author.name;
    
            const commitTime = document.createElement("p");
            commitTime.classList.add("commits-time");
            commitTime.textContent = commit.commit.author.date;
    
            // Add other commit information as needed
    
            commitCard.appendChild(commitHeader);
            commitCard.appendChild(commitName);
            commitCard.appendChild(commitTime);
    
            commitLink.appendChild(commitCard);
    
            commitsContainer.appendChild(commitLink);
        });
    }
    
// Call the function to display commits
    displayCommits();
});

function goBack() {
    window.history.back();
}