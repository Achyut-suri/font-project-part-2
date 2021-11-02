function preload()
{

}

function setup()
{
video=createCapture(VIDEO);
video.size(550 , 500);

canvas=createCanvas(550 , 500);
canvas.position(560 , 150);

poseNet=ml5.poseNet(video , modelLoaded);
poseNet.on('pose', gotPoses);
}



function modelLoaded()
{
console.log('Posenet is Initialized!');
}

function gotPoses(results)
{
 if(results.length>0)
 {
   console.log(results);
 }
}

function draw()
{
document.getElementById("square_side").innerHTML="width and height of the square will be = "+ diffrence + "px";


background("#D3D3D3");
fill('#121111');
stroke('#4fc221');
square(nose_x , nose_y , diffrence);
}