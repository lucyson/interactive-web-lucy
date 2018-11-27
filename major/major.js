	var nowbox = 1;
	var nextbox = 2;
	var parentsmove = 630;
	var childmove = 730;

function nextyes() {
	nowcon = "context"+nowbox;
	nextcon = "context"+nextbox;

	document.getElementById(nowcon).style.opacity = 0;
	document.getElementById(nextcon).style.opacity = 1;

	nowbox = nowbox + 1;
	nextbox = nextbox + 1;

	if (parentsmove == 630) {
	}
	else{
	parentsmove = parentsmove + 100;
	childmove = childmove - 100;
	parentsmovevar = parentsmove + "px";
	childmovevar = childmove + "px";
	document.getElementById("parents").style.left = parentsmovevar;
	document.getElementById("children").style.left = childmovevar;
	}
	if (nowbox == 5) {
	document.getElementById("box1").style.opacity = 0;
	document.getElementById("box2").style.opacity = 0;}
}

console.log(parentsmove)


function nextno() {
	nowcon = "context"+nowbox;
	nextcon = "context"+nextbox;

	document.getElementById(nowcon).style.opacity = 0;
	document.getElementById(nextcon).style.opacity = 1;

	nowbox = nowbox + 1;
	nextbox = nextbox + 1;

	parentsmove = parentsmove - 100;
	childmove = childmove + 100;
	parentsmovevar = parentsmove + "px";
	childmovevar = childmove + "px";


	document.getElementById("parents").style.left = parentsmovevar;
	document.getElementById("children").style.left = childmovevar;

	if (nowbox == 5) {
	document.getElementById("box1").style.opacity = 0;
	document.getElementById("box2").style.opacity = 0;
	}
}
