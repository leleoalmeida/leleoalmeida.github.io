//assignment 5
//title: box stack

//Variables for box sizes
int currentXSize = 60;
int currentZSize = 60;
int[] xRSize = new int[0];
int[] zRSize = new int[0];
int[] xLSize = new int[0];
int[] zLSize = new int[0];


//Variables for box position and movement
int[] xR = new int[0];
int[] zR = new int[0];
int[] xL = new int[0];
int[] zL = new int[0];
int[] dR = new int[0];
int[] dL = new int[0];
int axisX = width/2;
int axisZ = width/2;

//Box speed. Change this to increase or decrease difficulty.
int sX = 1;
int sZ = 1;

//Variables for game state
boolean rightBox = true;
boolean gameOver = false;
int turn = 0;


void setup() {
  size(500, 500, P3D);
  stroke(255);
  frameRate(45);
}


void draw() {
  background(50);

  fill(255);
  textSize(30);
  if (!gameOver) {
    text("Stacks: "+turn, width*0.3, height*0.1);
  }
  if (turn == 0) {
    rect(0, height/2-35, width, 150);
    fill(50);
    textAlign(CENTER,CENTER);
    text("BEP Challenge!",  width/2, height/2+50);
    text("Jump to release box", width/2, height/2);
  }
  if (gameOver) {
    
    text("You lose.", width/2, height/2-30);
    text("Final score: "+turn, width/2, height/2+30);
    stop();
  }
  translate(height/2, 0, -height/2);

  rotateX(-.7);
  rotateY(-45*PI/180);
  translate(100, 30*turn-100, 100);

  for (int i = 0; i<xR.length; i++) {
    rightBox(i);
  }
  for (int i = 0; i<xL.length; i++) {
    leftBox(i);
  }
  translate(0, height/2+30*turn, 0);
  fill(50, 150, 50);
  box(width, 5, height);
}



void rightBox(int boxNo) {
  pushMatrix();
  translate(xR[boxNo], dR[boxNo]+height/2, zR[boxNo]); 
  fill(0, 200, 200);
  box(xRSize[boxNo], 30, zRSize[boxNo]);

  if (boxNo+1 == xR.length && !rightBox) {
    axisX = xR[boxNo];
    xR[boxNo] += sX;
    if (xR[boxNo]<= (-height/2) || xR[boxNo]>=(height/2)) {
      sX *= -1;
    }
  }
  println("blue box no " + boxNo + "  length  " + xR.length);
  popMatrix();
}


void leftBox(int boxNo) {
  pushMatrix();
  translate(xL[boxNo], dL[boxNo]+height/2, zL[boxNo]); 
  fill(200, 200, 0);
  box(xLSize[boxNo], 30, zLSize[boxNo]);

  if (boxNo+1 == zL.length && rightBox) {
    axisZ = zL[boxNo];
    zL[boxNo] += sZ;
    if (zL[boxNo]<= (-height/2) || zL[boxNo]>=(height/2)) {
      sZ *= -1;
    }
  }
  println("yellow box no " + boxNo + "  length  " + xL.length);
  //println("yellow box no " + boxNo +" "+ (zL[boxNo]-xR[boxNo]));
  popMatrix();
}

void keyPressed() {
  turn ++;
  if (!rightBox&&turn!=2) {
    if ((abs(xR[xR.length-1]-xL[zL.length-1])) > currentXSize) {
      gameOver = true;
    } else {
      currentXSize = currentXSize-(abs(xR[xR.length-1]-xL[zL.length-1]));
    }
  }
  if (rightBox&&turn!=1) {
    if ((abs(zL[zL.length-1]-zR[xR.length-1])) > currentZSize) {

      gameOver = true;
    } else {
      currentZSize = currentZSize-abs(zL[zL.length-1]-zR[zL.length-1]);
    }
  }

  if (rightBox) {
    sX = 1;
    xR = append(xR, 0);
    zR = append(zR, axisZ);
    dR = append(dR, turn*-30);
    xRSize = append(xRSize, currentXSize);
    zRSize = append(zRSize, currentZSize);

    rightBox = false;
  } else {
    sZ = 1;
    xL = append(xL, axisX);
    zL = append(zL, 0);
    dL = append(dL, turn*-30);
    xLSize = append(xLSize, currentXSize);
    zLSize = append(zLSize, currentZSize);

    rightBox = true;
  }
}
