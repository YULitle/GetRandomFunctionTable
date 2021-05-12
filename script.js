var t;
var modal = document.getElementById("myModal");
var btn = document.getElementById("button");
var span = document.getElementsByClassName("close")[0];

function getRand(a,b){
	return n = Math.floor((Math.random()*(b-a+1)+a));
}

function myFunction() {
  // var name = prompt("What's your name?");
  var x = getRand(2,12);
  t = getRand(1,5);
  if (t == 1){
	  // This is the linear one
	  do {m=getRand(-10,10);} while (m==0);
	  b=getRand(3,23);
	  var y1 = m*x+b;
	  var y2 = m*(x+1)+b;
	  var y3 = m*(x+2)+b;
	  var y4 = m*(x+3)+b;
	  var y5 = m*(x+4)+b;
	  var y6 = m*(x+5)+b;
	  // document.getElementById("name").innerHTML = "Linear";
  } else if (t == 2){
	  // This is the quadratic one
	  do {a = getRand(-3,3);} while (a==0);
	  b = getRand(-3,4);
	  c = getRand(-3,3);
	  var y1 = a*x*x+b*x+c;
	  var y2 = a*(x+1)*(x+1)+b*(x+1)+c;
	  var y3 = a*(x+2)*(x+2)+b*(x+2)+c;
	  var y4 = a*(x+3)*(x+3)+b*(x+3)+c;
	  var y5 = a*(x+4)*(x+4)+b*(x+4)+c;
	  var y6 = a*(x+5)*(x+5)+b*(x+5)+c;
	  // document.getElementById("name").innerHTML = "Quadratic";
  } else if (t == 3){
	  // This is the exponential one
	  x = getRand(1,3);
	  a = getRand(1,4);
	  b = getRand(2,3);
	  var y1 = a*(b**(x));
	  var y2 = a*(b**(x+1));
	  var y3 = a*(b**(x+2));
	  var y4 = a*(b**(x+3));
	  var y5 = a*(b**(x+4));
	  var y6 = a*(b**(x+5));
	  // document.getElementById("name").innerHTML = "Exponential";
  } else if (t == 4){
	  // This is the cubic one
	  do {a = getRand(-2,3);} while (a==0);
	  b = getRand(-3,4);
	  c = getRand(-2,3);
	  d = getRand(-4,4);
	  var y1 = a*(x)**3+b*(x)**2+c*(x)+d;
	  var y2 = a*(x+1)**3+b*(x+1)**2+c*(x+1)+d;
	  var y3 = a*(x+2)**3+b*(x+2)**2+c*(x+2)+d;
	  var y4 = a*(x+3)**3+b*(x+3)**2+c*(x+3)+d;
	  var y5 = a*(x+4)**3+b*(x+4)**2+c*(x+4)+d;
	  var y6 = a*(x+5)**3+b*(x+5)**2+c*(x+5)+d;
	  // document.getElementById("name").innerHTML = "Cubic";
  } else if (t == 5){
	  // This is the quartic one
	  do {a = getRand(-2,3);} while (a==0);
	  b = getRand(-3,4);
	  c = getRand(-2,3);
	  d = getRand(-4,4);
	  e = getRand(-3,3);
	  var y1 = e*(x)**4+a*(x)**3+b*(x)**2+c*(x)+d;
	  var y2 = e*(x+1)**4+a*(x+1)**3+b*(x+1)**2+c*(x+1)+d;
	  var y3 = e*(x+2)**4+a*(x+2)**3+b*(x+2)**2+c*(x+2)+d;
	  var y4 = e*(x+3)**4+a*(x+3)**3+b*(x+3)**2+c*(x+3)+d;
	  var y5 = e*(x+4)**4+a*(x+4)**3+b*(x+4)**2+c*(x+4)+d;
	  var y6 = e*(x+5)**4+a*(x+5)**3+b*(x+5)**2+c*(x+5)+d;
	  // document.getElementById("name").innerHTML = "Quartic";
  }
  document.getElementById("choices").hidden = false;
  document.getElementById("x1").innerHTML = x;
  document.getElementById("x2").innerHTML = x+1;
  document.getElementById("x3").innerHTML = x+2;
  document.getElementById("x4").innerHTML = x+3;
  document.getElementById("x5").innerHTML = x+4;
  document.getElementById("x6").innerHTML = x+5;
  document.getElementById("y1").innerHTML = y1;
  document.getElementById("y2").innerHTML = y2;
  document.getElementById("y3").innerHTML = y3;
  document.getElementById("y4").innerHTML = y4;
  document.getElementById("y5").innerHTML = y5;
  document.getElementById("y6").innerHTML = y6;
  document.getElementById("name").innerHTML = "Which of these best describes this dataset?";
  document.getElementById("button").disabled = true;
}

function checkAnswer(n){
	if (t == n) {
		document.getElementById("choices").hidden = false;
  		modal.style.display = "block"
		document.getElementById("linear").checked = false;
		document.getElementById("quadratic").checked = false;
		document.getElementById("exponential").checked = false;
		document.getElementById("cubic").checked = false;
		document.getElementById("quartic").checked = false;
		document.getElementById("choices").hidden = true;
		document.getElementById("button").disabled = false;
		document.getElementById("x1").innerHTML = "";
  		document.getElementById("x2").innerHTML = "";
  		document.getElementById("x3").innerHTML = "";
  		document.getElementById("x4").innerHTML = "";
  		document.getElementById("x5").innerHTML = "";
  		document.getElementById("x6").innerHTML = "";
  		document.getElementById("y1").innerHTML = "";
  		document.getElementById("y2").innerHTML = "";
  		document.getElementById("y3").innerHTML = "";
  		document.getElementById("y4").innerHTML = "";
  		document.getElementById("y5").innerHTML = "";
  		document.getElementById("y6").innerHTML = "";
		document.getElementById("name").innerHTML = "";
		document.getElementById("debug").innerHTML = t + " and " + n;
	} else {
		alert("Nope " + t);
	}
	
}

function spanFunc(){
	modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}