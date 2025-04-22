// Video controls
const spaceVideo = document.getElementById('spaceVideo');

function playVideo() {
    spaceVideo.play();
}

function pauseVideo() {
    spaceVideo.pause();
}

function showVideoInfo() {
    alert("Cosmic Video Journey\nDuration: " + formatTime(spaceVideo.duration) + "\nResolution: 800x450");
}

// Audio controls
const spaceAudio = document.getElementById('spaceAudio');

function playAudio() {
    spaceAudio.play();
}

function pauseAudio() {
    spaceAudio.pause();
}

function showAudioInfo() {
    alert("Interstellar Soundscape\nDuration: " + formatTime(spaceAudio.duration) + "\nFormat: MP3");
}

// Image click events
document.getElementById('image1').addEventListener('click', function() {
    showImageInfo("Andromeda Galaxy", "The Andromeda Galaxy is our Milky Way's nearest large neighbor, about 2.5 million light-years away.");
});

document.getElementById('image2').addEventListener('click', function() {
    showImageInfo("Orion Nebula", "A stellar nursery where new stars are being born, located 1,344 light-years away.");
});

document.getElementById('image3').addEventListener('click', function() {
    showImageInfo("Earth at Night", "View of our planet from space showing city lights across continents.");
});

document.getElementById('image4').addEventListener('click', function() {
    showImageInfo("Solar Flare", "An intense burst of radiation coming from the release of magnetic energy on the Sun.");
});

// Helper function to format time
function formatTime(seconds) {
    if (isNaN(seconds)) return "Unknown";
    
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return minutes + ":" + (secs < 10 ? "0" : "") + secs;
}

// Image info function
function showImageInfo(title, description) {
    alert(title + "\n\n" + description);
}