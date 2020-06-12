console.log('WikiFront');
console.log('PEC 1 - Herramientas HTML y CSS');
console.log('Paco Durán Aparici');

// Lazy Youtube.js
function setVideoFrames() {
    window.setTimeout(function () {
        let youtube_iframes = document.querySelectorAll('.lazy-youtube');

        if (youtube_iframes !== null) {
            for (let i = 0; i < youtube_iframes.length; i++) {
                youtube_iframes[i].src = youtube_iframes[i].getAttribute('data-src');
            }
        }
    }, 2000);
}

if (window.addEventListener)  // W3C DOM
    window.addEventListener('load', setVideoFrames, false);
else if (window.attachEvent) { // IE DOM
    window.attachEvent('onload', setVideoFrames);
} else { //NO SUPPORT, lauching right now
    setVideoFrames();
}