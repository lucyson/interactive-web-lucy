/*	document.getElementById("box1").style.opacity = 1;
	document.getElementById("box2").style.opacity = 1;

*/


//library//
// new fullpage('#fullpage', {
// 	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

// 	afterLoad: function(origin, destination, direction){
// 		var loadedSection = this;

// 		//using index
// 		if(origin.index == 2){
// 			alert("Section 3 ended loading");
// 		}

// 		//using anchorLink
// 		if(origin.anchor == 'secondSlide'){
// 			alert("Section 2 ended loading");
// 		}
// 	}
// });

// new fullpage('#fullpage', {
//   sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
// });


// $('.carousel').carousel()



function imparents() {
	document.getElementById("context1").style.opacity = 1;
	document.getElementById("contextbox").style.opacity = 1;
	document.getElementById("box1").style.opacity = 1;
	document.getElementById("box2").style.opacity = 1;
	document.getElementById("pointP").style.opacity = 1;
	document.getElementById("questionbox").style.opacity = 1;
	document.getElementById("button1").style.opacity = 0;
	document.getElementById("button2").style.opacity = 0;
	document.getElementById("hello").style.opacity = 0;
	document.getElementById("questioncontext").innerHTML ="Have you ever had a conversation with your children about below content?"

}

function imstudent() {
	document.getElementById("context1").style.opacity = 1;
	document.getElementById("contextbox").style.opacity = 1;
	document.getElementById("box1").style.opacity = 1;
	document.getElementById("box2").style.opacity = 1;
	document.getElementById("pointC").style.opacity = 1;
	document.getElementById("questionbox").style.opacity = 1;
	document.getElementById("button1").style.opacity = 0;
	document.getElementById("button2").style.opacity = 0;
	document.getElementById("hello").style.opacity = 0;
	document.getElementById("questioncontext").innerHTML ="Have you ever had a conversation with your parents about below content?"
}



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
		document.getElementById("heart").style.opacity = 1;
	}
	else{
	parentsmove = parentsmove + 100;
	childmove = childmove - 100;
	parentsmovevar = parentsmove + "px";
	childmovevar = childmove + "px";
	parentspoint = parentsmove + 20;
	parentspointvar = parentspoint + "px";
	childpoint = childmove + 3;
	childpointvar = childpoint + "px";
	document.getElementById("parents").style.left = parentsmovevar;
	document.getElementById("children").style.left = childmovevar;
	document.getElementById("pointP").style.left = parentspointvar;
	document.getElementById("pointC").style.left = childpointvar;
	}
	if (nowbox == 5) {
	document.getElementById("box1").style.opacity = 0;
	document.getElementById("box2").style.opacity = 0;}
}


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
	parentspoint = parentsmove + 20;
	parentspointvar = parentspoint + "px"
	childpoint = childmove + 3;
	childpointvar = childpoint + "px";


	document.getElementById("parents").style.left = parentsmovevar;
	document.getElementById("children").style.left = childmovevar;
	document.getElementById("pointP").style.left = parentspointvar;
	document.getElementById("pointC").style.left = childpointvar;
	document.getElementById("heart").style.opacity = 0;


	if (nowbox == 5) {
	document.getElementById("box1").style.opacity = 0;
	document.getElementById("box2").style.opacity = 0;
	}
}

$(document).scroll(function(){
		scrollvar = $(document).scrollTop();

		if (scrollvar > 1000) {
			$(".back1").addClass("back2");
		}
	}
)

$(document).scroll(function(){
		scrollvar = $(document).scrollTop();

		if (scrollvar > 2000) {
			$(".back2").addClass("back3");
		}
	}
)

console.log($(document).scrollTop());






