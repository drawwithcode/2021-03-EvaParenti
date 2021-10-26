let myImage;
let myImage2;
let myImage3;
let myImage4;
let myImage5;
let mySong;

function preload() {
  //preload materials and links

  myImage = loadImage("./assets/fantasy.jpg"); //specify postion of image according to inex html
  myImage2 = loadImage("./assets/knife.png");
  myImage3 = loadImage("./assets/anfora.png");
  myImage4 = loadImage("./assets/fire.gif");
  myImage5 = loadImage("./assets/star.png");
  mySong = loadSound("../libraries/wolf.mp3");
}

function setup() {
  // imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  backgroundImage(myImage);
  /*push();
  //rotate(frameCount, 200, 50);
  image(
    myImage3,
    frameCount * 3,
    height / 7,
    myImage3.width / 4,
    myImage3.height / 4
  );
  pop();

  push();
  translate(120, 178, 90);
  image(
    myImage5,
    frameCount * 3,
    frameCount,
    myImage3.width / 4,
    myImage3.height / 4
  );
  image(
    myImage5,
    frameCount * 3,
    frameCount,
    myImage3.width / 4,
    myImage3.height / 4
  );
  pop();
*/
  push();
  rotate();
  image(
    myImage4,
    width / 40,
    height / 1.3,
    myImage.width / 10,
    myImage.height / 10
  );
  pop();

  pop();
  image(myImage2, mouseX, mouseY, myImage.width / 12, myImage.height / 12);
  textSize(20);
  textAlign(CENTER);
  textFont("Zen Old Mincho");
  fill("white");
  text("Missing tradition?", windowWidth / 2, windowHeight / 3);
  text("escape from wolf if you can", windowWidth / 2, windowHeight / 2);
  if (mouseX > width / 7) {
    if (mySong.isPlaying() === false) {
      //if is not

      mySong.loop(); //inizia e finisce dove si è interrotta
      mySong.setVolume(0.2);
      //  mySong.play();
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
