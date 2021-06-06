var mouseevent = "empty";
var lastpositionofx , lastpositionofy;
color = document.getElementById("color").value;
        width_of_line = document.getElementById("widthofline").value;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext ("2d");
var width = screen.width;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
        width_of_line = document.getElementById("widthofline").value;
    mouseevent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseevent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseevent = "mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
   currentpositionofx = e.clientX - canvas.offsetLeft;
   currentpositionofy = e.clientY - canvas.offsetTop;
   if (mouseevent == "mousedown") 
   {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;

console.log("Last position of x and y coordinates = ")
console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
ctx.moveTo(lastpositionofx,lastpositionofy);

console.log("Last position of x and y coordinates = ")
console.log("x = " + currentpositionofx + "y = " + currentpositionofy);
ctx.lineTo(currentpositionofx,currentpositionofy);
ctx.stroke();

   }
   lastpositionofx = currentpositionofx;
   lastpositionofy = currentpositionofy;
}

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
      
        

        console.log("my_touchstart");
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
        

        
    }

    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("my_touchmove");
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

function cleararea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);


}