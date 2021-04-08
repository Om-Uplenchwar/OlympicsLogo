Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");
color = "Blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

Canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {
    color = document.getElementById("cInput").value;
    console.log(color);

    mouseX = e.clientX - Canvas.offsetLeft;
    mouseY = e.clientY - Canvas.offsetTop;

    console.log("X = " + mouseX + "Y = " + mouseY);
    circle(mouseX, mouseY);
}

function circle(mouseX, mouseY) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouseX, mouseY, 40, 0, 5 * Math.PI);
    ctx.stroke();
}