// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select elements with the 'hidden' class for animations
    const elements = document.querySelectorAll(".hidden");
    const music = document.getElementById("background-music");
    const muteButton = document.getElementById("mute-button");

    // Function to make elements visible with a delay
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("visible"); // Adds the 'visible' class to trigger CSS transitions
        }, index * 500); // Delay increases for each element
    });

    // Add event listener for mute/unmute button
    muteButton.addEventListener("click", () => {
        if (music.muted) {
            music.muted = false; // Unmute the audio
            muteButton.textContent = "🔊 Mute"; // Update button text
        } else {
            music.muted = true; // Mute the audio
            muteButton.textContent = "🔈 Unmute"; // Update button text
        }
    });
});
