var canvas = document.querySelector('canvas');
    var context = canvas.getContext("2d");
    
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


drawScreen();
function drawScreen() {
 //Paw
 context.beginPath()
 context.moveTo(441, 321.5 - 16.5);
context.bezierCurveTo(441 + (0.5522847498307936 * 17), 321.5 - 16.5,  441 + 17, 321.5 - (0.5522847498307936 * 16.5), 441 + 17, 321.5);
context.bezierCurveTo(441 + 17, 321.5 + (0.5522847498307936 * 16.5), 441 + (0.5522847498307936 * 17), 321.5 + 16.5, 441, 321.5 + 16.5);
context.bezierCurveTo(441 - (0.5522847498307936 * 17), 321.5 + 16.5, 441 - 17, 321.5 + (0.5522847498307936 * 16.5), 441 - 17, 321.5);
context.bezierCurveTo(441 - 17, 321.5 - (0.5522847498307936 * 16.5), 441 - (0.5522847498307936 * 17), 321.5 - 16.5, 441, 321.5 - 16.5);
context.moveTo(485.5, 312 - 24);
context.bezierCurveTo(485.5 + (0.5522847498307936 * 22.5), 312 - 24,  485.5 + 22.5, 312 - (0.5522847498307936 * 24), 485.5 + 22.5, 312);
context.bezierCurveTo(485.5 + 22.5, 312 + (0.5522847498307936 * 24), 485.5 + (0.5522847498307936 * 22.5), 312 + 24, 485.5, 312 + 24);
context.bezierCurveTo(485.5 - (0.5522847498307936 * 22.5), 312 + 24, 485.5 - 22.5, 312 + (0.5522847498307936 * 24), 485.5 - 22.5, 312);
context.bezierCurveTo(485.5 - 22.5, 312 - (0.5522847498307936 * 24), 485.5 - (0.5522847498307936 * 22.5), 312 - 24, 485.5, 312 - 24);
context.moveTo(530, 328 - 19);
context.bezierCurveTo(530 + (0.5522847498307936 * 19), 328 - 19,  530 + 19, 328 - (0.5522847498307936 * 19), 530 + 19, 328);
context.bezierCurveTo(530 + 19, 328 + (0.5522847498307936 * 19), 530 + (0.5522847498307936 * 19), 328 + 19, 530, 328 + 19);
context.bezierCurveTo(530 - (0.5522847498307936 * 19), 328 + 19, 530 - 19, 328 + (0.5522847498307936 * 19), 530 - 19, 328);
context.bezierCurveTo(530 - 19, 328 - (0.5522847498307936 * 19), 530 - (0.5522847498307936 * 19), 328 - 19, 530, 328 - 19);
context.moveTo(481.5, 369.5 - 23.5);
context.bezierCurveTo(481.5 + (0.5522847498307936 * 58.5), 369.5 - 23.5,  481.5 + 58.5, 369.5 - (0.5522847498307936 * 23.5), 481.5 + 58.5, 369.5);
context.bezierCurveTo(481.5 + 58.5, 369.5 + (0.5522847498307936 * 23.5), 481.5 + (0.5522847498307936 * 58.5), 369.5 + 23.5, 481.5, 369.5 + 23.5);
context.bezierCurveTo(481.5 - (0.5522847498307936 * 58.5), 369.5 + 23.5, 481.5 - 58.5, 369.5 + (0.5522847498307936 * 23.5), 481.5 - 58.5, 369.5);
context.bezierCurveTo(481.5 - 58.5, 369.5 - (0.5522847498307936 * 23.5), 481.5 - (0.5522847498307936 * 58.5), 369.5 - 23.5, 481.5, 369.5 - 23.5);
context.strokeStyle = '#fff';
context.lineWidth = 5;
context.stroke();
context.fillStyle = '#ff99e6';
context.fill();
context.closePath();

// Clouds
context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(130, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 320, 180, 340, 150);
context.bezierCurveTo(420, 150, 420, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 5, 250, 20, 250, 50);
context.bezierCurveTo(200, 5, 150, 20, 170, 80);
context.lineWidth = 5;
context.fillStyle = '#dcf5f4';
context.fill();
context.strokeStyle = '#8ED6FF';
context.stroke();
context.closePath();


//Bag
context.beginPath();
var x = 900;
var y = 230;
var radius = 75;
var startAngle = 1.1 * Math.PI;
var endAngle = 1.9 * Math.PI;
var counterClockwise = false;
context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
context.lineWidth = 15;
context.strokeStyle = 'black';
context.stroke();
context.closePath();

context.beginPath();
context.fillStyle = '#b0f5f2';
context.fillRect(800, 200, 200, 200);
context.closePath();


//Python
context.beginPath();
context.lineWidth = 30;
context.lineJoin = 'bevel';
context.lineCap = 'round';
context.moveTo(1310, 200);
context.strokeStyle = "blue";
context.lineTo(1445, 200);
context.lineTo(1445,300);
context.lineTo(1310,300);
context.lineTo(1310,400); 
context.stroke();
context.closePath();

 context.beginPath();
 context.lineWidth = 30;
 context.lineJoin = 'bevel';
 context.lineCap = 'round';
 context.strokeStyle = "yellow";
 context.moveTo(1480, 250);
 context.lineTo(1480, 340);
 context.lineTo(1350, 340);
 context.lineTo(1350, 440);
 context.lineTo(1480, 440);
 context.stroke();
 context.closePath();

//circle1
context.beginPath();
context.arc(1315, 200, 10, 0, 2 * Math.PI);
context.fillStyle = '#fff';
context.fill();
context.closePath();
//circle2
context.beginPath();
context.arc(1480, 440, 10, 0, 2 * Math.PI);
context.fillStyle = '#fff';
context.fill();
context.closePath();


//Windows
context.beginPath();
context.fillStyle = '#F25022';
context.fillRect(190, 700, 100, 100);
context.closePath();

context.beginPath();
context.fillStyle = '#7FBA00';
context.fillRect(300, 700, 100, 100);
context.closePath();

context.beginPath();
context.fillStyle = '#00A4EF';
context.fillRect(190, 810, 100, 100);
context.closePath();

context.beginPath();
context.fillStyle = '#FFB900';
context.fillRect(300, 810, 100, 100);
context.closePath();

//Traffic lights
context.beginPath();
context.fillStyle = '#383a3b';
context.fillRect(750, 550, 200, 400);
context.closePath();

context.beginPath();
context.arc(855, 880, 50, 0, 2 * Math.PI);
context.fillStyle = '#2dc937';
context.fill();
context.closePath();

context.beginPath();
context.arc(855, 750, 50, 0, 2 * Math.PI);
context.fillStyle = '#e7b416';
context.fill();
context.closePath();

context.beginPath();
context.arc(855, 630, 50, 0, 2 * Math.PI);
context.fillStyle = '#cc3232';
context.fill();
context.closePath();

//Netflix
context.beginPath();
context.fillStyle = '#000';
context.fillRect(1050, 550, 300, 300);
context.closePath();
//1st
context.beginPath();
context.lineWidth = 50;
context.lineCap = 'square';
context.strokeStyle = "#9c1c1c";
context.moveTo(1150, 580);
context.lineTo(1150, 820);
context.stroke();
context.closePath();

//3rd
context.beginPath();
context.lineWidth = 50;
context.lineCap = 'square';
context.strokeStyle = "#9c1c1c";
context.moveTo(1260, 580);
context.lineTo(1260, 820);
context.stroke();
context.closePath();

//2nd
context.beginPath();
context.lineWidth = 50;
context.lineCap = 'butt';
context.strokeStyle = "#E50914";
context.moveTo(1150, 565);
context.lineTo(1262, 835);
context.stroke();
context.closePath();
}
