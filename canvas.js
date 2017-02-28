var svg = document.getElementById("thing");

var lastX, lastY;

var addCircle = function(e){
    console.log("grov");
    var X = e.offsetX;
    var Y = e.offsetY;

    
    
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    dot.setAttribute("cx", X.toString());
    dot.setAttribute("cy", Y.toString());
    dot.setAttribute("r", "25");
    dot.setAttribute("fill", "green");
    svg.appendChild(dot);
    /*
    canvas.lineTo(X,Y);
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(X, Y, 10, 0, 2 * Math.PI);
    canvas.fill();
    canvas.moveTo(X,Y);
    */
}

var clear_screen = function(e){
    var sVg = document.getElementById('thing');
    document.body.removeChild(sVg)
}

var canvas = document.getElementById("thing");
canvas.addEventListener("click", addCircle);

var clear_button = document.getElementById("clear");
clear_button.addEventListener("click", clear_screen);
