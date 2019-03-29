var showText = false;
SetText(showText);
function HideText(){
	var text = document.getElementsByTagName("ul");
	for(var i = 0;i<text.length;i++){
		text[i].style.visibility="hidden";
	}
}

function SetTagVisibility(tag, vis){
	var text = document.getElementsByTagName(tag);
	var v = "none";
	if(vis)
		v = "block";
	for(var i = 0;i<text.length;i++){
		text[i].style.display=v;
	}
}


function SetTitle(vis){
	SetTagVisibility("h2",vis);
	SetTagVisibility("h3",vis);
}

function SetText(visibility){
	var text = document.getElementsByTagName("ul");
	var vis = "none";
	if(visibility)
		vis = "block";
	for(var i = 0;i<text.length;i++){
		text[i].style.display= vis;
	}
	showText = visibility;
}
