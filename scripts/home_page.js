var list = [];
var projNum = 0;
var carousel = 0;
var transitionTime = 250;

function init(){
	var projects = document.getElementById("projects");
	carousel = document.getElementById("carousel");
	console.log(projects);
	console.log(projects.childNodes.length);
	console.log(-2%3);
	for(var i=0;i<projects.childNodes.length;i++){
		var sec = projects.childNodes[i];
		if(sec.nodeType == Node.ELEMENT_NODE){
			list.push(sec);
		}
	}

	/*
	for(var i=0;i<list.length;i++){
		if(i>0){
			list[i].style.display="none";
		}
	}
	*/
}

function mod(a,b){
	if(a>=0)
		return a%b;
	return (b-(-a))%b;
}

function setProject(num){
	projNum = mod(num,list.length);
}

function prevProject(){
	setProject(projNum-1);
	showProjectBefore(projNum);
	setTimeout(function(){
		if(carousel.childNodes.length > 1)
			carousel.removeChild(carousel.childNodes[1]);
	}, transitionTime );
}

function nextProject(){
	/*
	hideProject(projNum-1);
	setProject(projNum+1);
	showProject(projNum-1);
	showProject(projNum);
	*/
	setProject(projNum+1);
	showProject(projNum);
	setTimeout(function(){
		if(carousel.childNodes.length > 1)
			carousel.removeChild(carousel.childNodes[0]);
	}, transitionTime );
}

function autoplay(){
}

function showProject(num){
	//list[mod(num,list.length)].style.display="block";
	//list[mod(num,list.length)].display="block";
	carousel.appendChild(list[mod(num,list.length)]);
}

function showProjectBefore(num){
	//list[mod(num,list.length)].style.display="block";
	//list[mod(num,list.length)].display="block";
	carousel.insertBefore(list[mod(num,list.length)],carousel.childNodes[0]);
}


function hideProject(num){
	list[mod(num,list.length)].style.display="none";
}

function showOnlyProject(num){
	for(var i=0;i<list.length;i++){
		var disp="none";
		if(i==num)
			disp="block";
		list[i].style.display=disp;
	}
}
