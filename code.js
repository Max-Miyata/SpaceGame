/**
 * Lab Goal: This lab was designed to teach you
 * how to find collisions with many objects
 * 
 * Lab Description: Detect Collision
 */

// Initialize variables
var bg1={x:0, Y:0, W:320, h:450, s:2, img:"bg1"};
var bg2={x:-320, Y:0, W:320, h:450, s:2, img:"bg2"};
var score =0;
var ay=40;
var ax=0;
var ry=350;
var rx=80;
var time = 0;
var sec = 0;
var min = 0;
var speed = 3;

drawBackground();
timedLoop(100, scrollBg);
function drawBackground(){
  image(bg1.img, "assets/6062b.png");
  image(bg2.img, "assets/6062a.png");
  
  setProperty(bg1.img, "fit", "cover");
  setProperty(bg2.img, "fit", "cover");
}

function scrollBg(){
  bg1.x+=bg1.s;
  bg2.x+=bg2.s;
  setPosition(bg1.img, bg1.x, bg1.y, bg1.w, bg1.h);
  setPosition(bg2.img, bg2.x, bg2.y, bg2.w, bg2.h);
}

rocketAst();
function rocketAst() {
     
      //create two images 
      image("asteroid", "assets/meteor2.png");
      image("rocket", "assets/rocket.gif");
      image("ast1", "assets/meteor.png");
      image("ast3", "assets/rock.png");
      
      //scale images to place them to designated location
      setPosition("asteroid", ax, ay, 100, 50);
      setPosition("ast1", ax, ay, 500, 50);
      setPosition("ast3", ax, ay, 300, 50);
      //place images to designated locations
      setPosition("rocket", rx, ry, 180, 100);
}

 timedLoop(100, function rocketAst() {
        ay = ay+speed;
        setPosition("asteroid", ax, ay, 100, 50);
        setPosition("ast1", ax, ay, 500, 50);
        setPosition("ast3", ax, ay, 300, 50);
        setPosition("rocket", rx, ry, 180, 100);
        //wrap around asteroid from bottom to top
        //HINT: start from 50 y
        //WRITE CODE CHANGE
        if (ay >= 450){
          ay=40;
          ax=randomNumber(0,320)
        }

        time = time + 1; // Increment the time by 1 (10 milliseconds)
        // Calculate time components
         
        sec = Math.floor(time / 10) % 60; // Calculate seconds
        min = Math.floor(time / 600) % 60; // Calculate minutes
         
        // Display the time 
        setText("time",  "TIME: "+
            (min < 10 ? "0" : "") + min + ":" + 
            (sec < 10 ? "0" : "") + sec) ;
        
        //Display Score
        setText("score", "SCORE: " + score);
       /**************************************************************/
       

      });
      
function checkCollision(){
  var xOv
  var yOv
}
      
  onEvent("screen1", "keydown", function( event) {
   console.log(event.key);
   //HINT: Use  event.key to retrieve key that has been pressed
   
   
   if(event.key=="="){
     speed=speed+5;
   }
   if(event.key=="Up"){
     ry=ry-10;
   }
   if(event.key=="Down"){
     ry=ry+10;
   }
   if(event.key=="Left"){
     rx=rx-10;
   }
   if(event.key=="Right"){
     rx=rx+10;
   }
  })
   
    //check if ship and rocket overlaps 
    //Increase score by 10 and  move asteroid to top random location


