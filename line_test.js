var n=50;
var array_x = new Array(n);
var array_y = new Array(n);


function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  createCanvas(w, h);
  for (var i=0; i<n; i++)
  {
    array_x[i]=int(random(w));
    array_y[i]=int(random(h));
  }

}


function draw() {
   background(0, 100);
  
  var x = int(random(w));
  var y = int(random(h));
  x = mouseX;
  y = mouseY;

  for (var j=0; j<n; j++) {  
    for (var i=0; i<j; i++)
    {

      noFill();
      circle(array_x[i], array_y[i], 10);
      if (dist(x, y, array_x[j], array_y[j])<(w/4)) { 
        stroke(255, 50);
        strokeWeight(1);
        line(x, y, array_x[j], array_y[j]);
        if (dist(array_x[j], array_y[j], array_x[i], array_y[i])<(w/8)) { 
          stroke(255, 50);
          strokeWeight(2);
          line(array_x[j], array_y[j], array_x[i], array_y[i]);
           stroke(255);
          circle(array_x[j], array_y[j], dist(array_x[j], array_y[j], array_x[i], array_y[i]));
        }
      }
    }
  }
}
