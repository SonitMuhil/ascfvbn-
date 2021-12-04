function preload(){
}

function setup() {
    createCanvas(100, 50);
    background(153);
    line(0, 0, 5, 50);
    rect(40, 120, 120, 40);
      
    
  

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot(){
    save('sister_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}