document.addEventListener("DOMContentLoaded", function () {

// Social Media Sharing Functions
function shareOnFacebook() {
    // Replace 'your-website-url' with the URL you want to share
    const urlToShare = 'https://rosebud78.github.io/Worldapedia/';
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
}

function shareOnTwitter() {
    // Replace 'your-website-url' and 'your-text' with your desired URL and text
    const urlToShare = 'https://rosebud78.github.io/Worldapedia/';
    const textToShare = 'Check out Worldapedia, the best site for Monster Hunter: World tips.';
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
    window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400');
}

// Event listeners for social media sharing buttons
const shareFacebookButton = document.getElementById("share-facebook");
const shareTwitterButton = document.getElementById("share-twitter");
shareFacebookButton.addEventListener("click", shareOnFacebook);
shareTwitterButton.addEventListener("click", shareOnTwitter);

});