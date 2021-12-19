function rotate()
{
	var x = 100;  // min value for degrees to rotate
	var y = 2000; // max value for degrees to rotate
	
	var deg = Math.floor(Math.random() * (x-y)) + y;         // Random deg generator
	
	document.getElementById("box").style.transform = "rotate("+deg+"deg)";					// Wheel spins with rand deg value 
	document.getElementById("box").addEventListener("transitionend", result); 				// Runs when the wheel stop spinning calculating where it landed
}

function result()
{
	
var first = document.getElementById("detect1");                   // Accessing all the triangle via DOM
var second = document.getElementById("detect2");
var third = document.getElementById("detect3");
var fourth = document.getElementById("detect4");
var fifth = document.getElementById("detect5");
var sixth = document.getElementById("detect6");
var dot = document.getElementById("dot");						// Overlapping element checker


var rect1 = first.getBoundingClientRect();						// Assigning every variable object where it defines the x and y axis of the triangle in the wheel
var rect2 = second.getBoundingClientRect();
var rect3 = third.getBoundingClientRect();
var rect4 = fourth.getBoundingClientRect();
var rect5 = fifth.getBoundingClientRect();
var rect6 = sixth.getBoundingClientRect();
var arrow = dot.getBoundingClientRect();

			
if (!(rect1.right < arrow.left || rect1.left > arrow.right || rect1.bottom < arrow.top || rect1.top > arrow.bottom))// If triangle 1 is overlapping with dot
{
	alert("Unfortunately you didn't win anything. Good luck next Time");
}
else if (!(rect2.right < arrow.left || rect2.left > arrow.right || rect2.bottom < arrow.top || rect2.top > arrow.bottom))//If Triangle 1 is overlapping with dot
{
	alert("You get a free ticket to CinemaHall Dublin to watch your favourite movie on the big screen! ");
}
else if (!(rect3.right < arrow.left || rect3.left > arrow.right || rect3.bottom < arrow.top || rect3.top > arrow.bottom))//If Triangle 1 is overlapping with dot
{
	alert(" You get 1 month subscription for Netflix ! ");
}
else if (!(rect4.right < arrow.left || rect4.left > arrow.right || rect4.bottom < arrow.top || rect4.top > arrow.bottom))//If Triangle 1 is overlapping with dot
{
	alert("You get a free 1 month membership of my48 subscription!");
}
else if (!(rect5.right < arrow.left || rect5.left > arrow.right || rect5.bottom < arrow.top || rect5.top > arrow.bottom))//If Triangle 1 is overlapping with dot
{
	alert("Unfortunately you didn't win anything. Good luck next Time");
}
else if (!(rect6.right < arrow.left || rect6.left > arrow.right || rect6.bottom < arrow.top || rect6.top > arrow.bottom))//If Triangle 1 is overlapping with dot
{
	alert("You get a 10 euro voucher for Starbucks! ");
}
else																	// Test statement if neither of the triangles is overlapping
{
	alert("Not found");
}
redirect();																// Redirecting to home page
}
function redirect()
{
	alert("Redirecting to the Home page");
	window.location.href = "../index.html"
}
