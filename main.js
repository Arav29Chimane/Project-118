function setup() {
    canvas = createCanvas(310, 310);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 310, 310);

    classifier.classify(video, gotResult);
}

