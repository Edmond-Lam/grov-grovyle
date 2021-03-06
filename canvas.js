var svgImage = document.getElementById("svgImage");
var clear_button = document.getElementById("clear");
var mousex, mousey;

svgImage.addEventListener("mousemove", function(e) {
    mousex = e.offsetX;
    mousey = e.offsetY;
});

var addDot = function(e){
    if (svgImage.hasChildNodes()){
	var startx = svgImage.lastChild.getAttribute("cx");
	var starty = svgImage.lastChild.getAttribute("cy");
	var c = document.createElementNS("http://www.w3.org/2000/svg", "line");
	c.setAttribute("x1", startx);
	c.setAttribute("y1", starty);
	c.setAttribute("x2", mousex);
	c.setAttribute("y2", mousey);
	c.setAttribute("style", "stroke: #000000;stroke-width:2");
	document.getElementById("svgImage").appendChild(c);
	addCircle(e);
    }
    else{
	addCircle(e);
    }
}

var addCircle = function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    c.setAttribute("cx", mousex.toString());
    
    c.setAttribute("cy", mousey.toString());
    
    c.setAttribute("r", "20");
    
    c.setAttribute("fill", "black");
    
    document.getElementById("svgImage").appendChild(c);
}



var clear_screen = function(e){
    while (svgImage.hasChildNodes()){
	svgImage.removeChild(svgImage.lastChild);
    }
}


svgImage.addEventListener("click", addDot);


clear_button.addEventListener("click", clear_screen);
