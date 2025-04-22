// List of your video files (update these with your actual filenames)
const videoSources = [
    "static/images/sword.mp4",
    "static/images/blackbear.mp4",
    "static/images/russia_food_dance.mp4",
    "static/images/flirty.mp4",
    "static/images/cute-1.mp4"
];

// Function to pick a random video from the list
function pickRandomVideo() {
    const randomNumber = Math.random() * videoSources.length;
    const randomIndex = Math.floor(randomNumber);
    return videoSources[randomIndex];
}

// Function to change the video on the page
function changeVideo() {
    const videoPlayer = document.getElementById('image-display');
    
    // Check if we found the video player
    if (!videoPlayer) {
        console.log("Couldn't find the video player!");
        return;
    }
    
    // Get a random video
    const randomVideo = pickRandomVideo();
    console.log("Now playing:", randomVideo);
    
    // Clear any existing video
    videoPlayer.innerHTML = '';
    
    // Create new video source
    const newSource = document.createElement('source');
    newSource.src = randomVideo;
    newSource.type = 'video/mp4';
    
    // Add the new source to the video player
    videoPlayer.appendChild(newSource);
    
    // Try to play the video
    videoPlayer.load();
    videoPlayer.play().catch(error => {
        console.log("Video couldn't autoplay:", error);
    });
}

// Run when page finishes loading
window.addEventListener('DOMContentLoaded', changeVideo);

// Optional: Add button to change video manually
// Uncomment these lines if you want a manual refresh button
/*
function addRefreshButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Change Video';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.zIndex = '1000';
    btn.onclick = changeVideo;
    document.body.appendChild(btn);
}
window.addEventListener('DOMContentLoaded', addRefreshButton);
*/