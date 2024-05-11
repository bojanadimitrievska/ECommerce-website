const socialMediaPosts = [
    "Check out our new arrivals on Instagram! #newproducts",
    "Join the conversation on Twitter! #ecommerce",
    "Exciting updates on Facebook! Follow us for more!",
    "Subscribe today and keep in touch with our latest sales!",
];

// Function to display social media posts
function displaySocialMediaPosts() {
    const postContainer = document.querySelector(".post-container");
    let index = 0;

    function displayPost() {
        postContainer.innerHTML = socialMediaPosts[index];
        index = (index + 1) % socialMediaPosts.length;
    }

    displayPost(); // Initial display

    setInterval(displayPost, 5000); // Change post every 5 seconds
}

// Call the function when the page loads
window.onload = displaySocialMediaPosts;