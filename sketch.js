let earth_texture;
let paper_plane;
let x_rotation = 0;
let y_rotation = 0;
let z_rotation = 0;
let x_offset = 0;
let y_offset = 0;
let z_offset = 0;
let og_mouse_x;
let og_mouse_y;
let slider;
let mouse_triggered = false;
let draw_plane = false;

function preload (){
  earth_texture=loadImage('assets/earthtexture.jpg');
  paper_plane = loadImage('assets/paperplane.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  slider = createSlider(-1, 1, -1, 1);
  slider.position(10, 10);
  slider.style('width', '200px');
}

function draw() {
  background(0);
  angleMode(DEGREES);

  push()
  x_rotation += (0.1*x_offset);
  y_rotation += (0.1*(slider.value()+y_offset));
  z_rotation += (0.1*z_offset);
  rotateX(x_rotation);
  rotateY(y_rotation);
  rotateZ(z_rotation);
  texture(earth_texture);
  sphere(260,25,25);
  pop()

  if (draw_plane) {
    rotateY(0);
    translate(0, 0, 260);
    texture(paper_plane);
    box(40, 40, 0);
  }

  if (mouse_triggered) {
    
  }

  orbitControl();
}

function mousePressed() {
  mouse_triggered = true;
  draw_plane = true;
  og_mouse_x = mouseX;
  og_mouse_y = mouseY;
}

function mouseReleased() {
  let x_travel = mouseX - og_mouse_x
  let y_travel = mouseY - og_mouse_y
  y_offset = y_travel / 200
  z_offset = x_travel / 200
}