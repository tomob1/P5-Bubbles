function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(220);
    colorMode(HSB)

    for(var i = 0; i < 150; i++) {
        circles(); 
    }
    
}

function draw() {
    
}

function circles() {

    var x = random(width);
    var y = random(height);
    var d = random (5, 150);
    var hue = random(120, 255)

    fill(hue, 255, 255, 0.1);
    circle(x, y, d);
}