let mySong;
let myImage;
let myImage2;
let myImage4;

function preload() {
  //preload materials and links
  mySong = loadSound("./libraries/wolf.mp3");
  myImage = loadImage("./assets/fantasy.jpg"); //specify postion of image according to inex html
  myImage2 = loadImage("./assets/knife.png");
  myImage4 = loadImage("./assets/fire.gif");
}

function setup() {
  // imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  backgroundImage(myImage);

  image(
    myImage4,
    width / 40,
    height / 1.3,
    myImage.width / 10,
    myImage.height / 10
  );

  image(myImage2, mouseX, mouseY, myImage.width / 12, myImage.height / 12);
  textSize(20);
  textAlign(CENTER);
  textFont("Zen Old Mincho");
  fill("white");
  text("Missing tradition?", windowWidth / 2, windowHeight / 3);
  text("escape from wolves if you can", windowWidth / 2, windowHeight / 2);

  if (mouseX > width / 7) {
    if (mySong.isPlaying() === false) {
      //if is not

      mySong.loop(); //inizia e finisce dove si è interrotta
      //mySong.setVolume(0.2);
    }
  } else {
    mySong.pause();
  }
}

function backgroundImage(img) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img.width, height / img.height);
  image(img, 0, 0, img.width * scale, img.height * scale);
  pop();
}
