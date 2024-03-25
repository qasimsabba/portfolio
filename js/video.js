window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-7XD4F8STF9', {
    'anonymize_ip': true
});

function playVideo(element, videoUrl) {
    // Create a video element
    var video = document.createElement("video");
    video.src = videoUrl;
    video.controls = true; // Show video controls

    // Set styles to make video responsive
    video.style.position = "fixed";
    video.style.top = "50%";
    video.style.left = "50%";
    video.style.transform = "translate(-50%, -50%)";
    video.style.zIndex = "9999";
    video.style.maxWidth = "90vw"; // Set maximum width to 90% of viewport width
    video.style.maxHeight = "90vh"; // Set maximum height to 90% of viewport height
    video.style.width = "auto";
    video.style.height = "auto";
    video.style.objectFit = "contain"; // Maintain aspect ratio without cropping
    video.style.borderRadius = "10px"; // Add border radius if desired

    // Create an overlay to blur the background
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Semi-transparent black overlay
    overlay.style.zIndex = "9998"; // Ensure overlay is below the video
    document.body.appendChild(overlay);

    // Create a close button
    var closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.style.position = "fixed";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.zIndex = "10000"; // Ensure button is above the video
    closeButton.style.padding = "10px";
    closeButton.style.fontSize = "16px";
    closeButton.style.color = "#fff";
    closeButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = function() {
        // Remove video, overlay, and close button
        document.body.removeChild(video);
        document.body.removeChild(overlay);
        document.body.removeChild(closeButton);
        // Show the original image
        element.style.display = "inline-block";
    };
    document.body.appendChild(closeButton);

    // Hide the original image
    element.style.display = "none";

    // Append video to the body
    document.body.appendChild(video);
}
var videoUrls = {
    "video1": "videos/video1.mp4",
    "video2": "videos/video2.mp4",
    "video3": "videos/video3.mp4",
    "video4": "videos/video4.mp4",
    "video5": "videos/video5.mp4",
    "video6": "videos/video6.mp4",
    "video7": "videos/video7.mp4",
    "video8": "videos/video8.mp4",
    "video9": "videos/video9.mp4",
    "video10": "videos/video10.mp4",
    "video11": "videos/video11.mp4",
    "video12": "videos/video12.mp4",
    "video13": "videos/video13.mp4",
    "video14": "videos/video14.mp4",
    "video15": "videos/video15.mp4",
    "video16": "videos/video16.mp4",
    "video17": "videos/video17.mp4",
    "video18": "videos/video18.mp4",
    "video19": "videos/video19.mp4",
    "video20": "videos/video20.mp4",
    "video21": "videos/video21.mp4",
    "video22": "videos/video22.mp4",
    "video23": "videos/video23.mp4",
    "video24": "videos/video24.mp4"
};
