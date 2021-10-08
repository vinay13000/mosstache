noseX=0;
noseY=0;



function preload(){
 clown_nose=loadImage('https://i.postimg.cc/6pgCM17b/Removal-334.png')
}

function setup(){
    canvas=createCanvas(700,700);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(700,700);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
  if(results.length>0){
      console.log(results);
      noseX=results[0].pose.nose.x+15;
     noseY=results[0].pose.nose.y+15;
      console.log("nose x="+noseX);
      console.log("nose y"+noseY);
      
  }
}

function draw(){
    image(video,0,0,999,999)
  
     image(clown_nose,noseX,noseY,100,100)
}

function take_snapshot(){
    save("award_goes_to_ugly_nose.png")
}