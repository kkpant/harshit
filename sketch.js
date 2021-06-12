var garden,garden_img;
var cat,cat_img,cat_img1,cat_img2,cate_img3;
var mouse,mouse_img,mouse_img1,mouse_img2,mouse_img3;

function preload() {
    //load the images here
    garden_img = loadImage("images/garden.png");
    cat_img1 = loadAnimation("images/cat1.png");
    cat_img2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat_img3 = loadAnimation("images/cat4.png");
    mouse_img = loadAnimation("images/mouse1.png");
    mouse_img1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse_img2 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
                                                                                                                                 
    
     cat = createSprite(730,715,50,50);
     cat.addAnimation("catstanding",cat_img);
     cat.scale = 0.08;

     mouse = createSprite(230,715,50,50);
     mouse.addAnimation("sleeping",mouse_img2);
     mouse.scale = 0.08; 
                 
}

function draw() {

    background(garden_img);
    //Write condition here to evalute if tom and jerry collide 
     
     if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        
      cat.velocityX = 0;
      cat.changeAnimation("lastcat",cat_img3);
      cat.scale=0.08;
      cat.changeAnimation("lastcat");
      cat.x=300
      mouse.changeAnimation("lastmouse",mouse_img3);
      mouse.scale = 0.08
      
     mouse.changeAnimation("lastmouse");
     }

        
    drawSprites();
}
function keyPressed(){

  //For moving and changing animation write code here

     if(keyDown === RIGHT_ARROW){
      mouse.addAnimation("running",mouse_img1);
      mouse.framedelay =25;
       cat.velocityX=-2;
     }
     
     if(keyDown === LEFT_ARROW){
         cat.velocityX=-5;
         cat.addAnimation("running",cat_img2);  
         cat.changeAnimation("running")
         mouse.addAnimation("mouseteasing",mouse_img2);
         mouse.changeAnimation("mouseteasing");
         mouse.framedelay = 25;
     }

     
}
