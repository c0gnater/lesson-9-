var weight=[40,30,25,80]
function weightcalculate(){
  var sum=weight[0]+weight[1]+weight[2]+weight[3];
  var avg=sum/weight.length;
  console.log(avg);
}
function setup()
{
  createCanvas(400,400);
  weightcalculate()
}

function draw() 
{
background(51);

}

