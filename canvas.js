var canvasElement = document.getElementById("canvas"); 
/* i accessed the canvas element */
var drawingTools = canvasElement.getContext("2d"); 
// getContext is a method of canvas element, to obtain the drawing functions
drawingTools.fillStyle = "rgb(200,40,50)";
drawingTools.fillRect(0,0,50,50);
drawingTools.moveTo(100,100);
drawingTools.lineTo(200,200);
drawingTools.stroke();

