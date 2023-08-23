var angle;
var slider;

function setup() {
    createCanvas(800, 800);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
    background(200);
    angle = slider.value();
    var len = 200;
    translate(width / 2, height);
    branch(len);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 4) {
        if(len < 10) {
            stroke('green')
        }
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}
