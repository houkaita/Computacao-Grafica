function setup() {
  createCanvas(800, 600);
}

function calculaHora(r) {
  var hora = hour();
  hora = hora % 12;

  var anguloHora = map(hora, 0, 12, 0, 360) + map(minute(), 0, 60, 0, 360 / 12);
  //anguloHora += map(min(), 0, 60, 0, 360 / 12);

  var xHora = r * 0.6 * cos(radians(anguloHora - 90));
  var yHora = r * 0.6 * sin(radians(anguloHora - 90));

  return [xHora, yHora];
}

function calculaMinuto(r) {
  var min = minute();

  var anguloMin = map(min, 0, 60, 0, 360) + map(second(), 0, 60, 0, 360 / 60);
  //anguloMin += map(second(), 0, 60, 0, 360/12);

  var xMinuto = r * 0.75 * cos(radians(anguloMin - 90));
  var yMinuto = r * 0.75 * sin(radians(anguloMin - 90));

  return [xMinuto, yMinuto];
}

function calculaSegundo(r) {
  var seg = second();
  var mil = millis();

  var anguloSeg = map(seg, 0, 60, 0, 360);
  //anguloSeg += map(mil, 0, 60, 0, 360/60);

  var xSegundo = r * 0.5 * cos(radians(anguloSeg - 90));
  var ySegundo = r * 0.5 * sin(radians(anguloSeg - 90));

  return [xSegundo, ySegundo];
}

function drawNumeros(raio) {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(0);

    for (var i = 1; i <= 12; i++) {
        var angulo = radians(map(i, 0, 12, -90, 270));
        var x = raio * 0.85 * cos(angulo);
        var y = raio * 0.85 * sin(angulo);
        text(i, x, y);
    }
}

function draw() {
  var raio = 200;

  background(200, 50);
  translate(width / 2, height / 2);
  circle(0, 0, raio * 2);

  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, 0, calculaSegundo(raio)[0], calculaSegundo(raio)[1]);
  stroke(0, 255, 0);
  strokeWeight(4);
  line(0, 0, calculaMinuto(raio)[0], calculaMinuto(raio)[1]);
  stroke(0, 0, 255);
  strokeWeight(6);
  line(0, 0, calculaHora(raio)[0], calculaHora(raio)[1]);

  stroke(255, 0, 0);
  strokeWeight(4);

  drawNumeros(raio);

  stroke(0, 0, 0);
  strokeWeight(4);
}
