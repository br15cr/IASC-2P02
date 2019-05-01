// https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript
function loadHeader(){
	var header = document.getElementById("header");
	header.innerHTML='<iframe src="header.html"></iframe>';
	frame = header.getElementsByTagName("iframe")[0].contentWindow.document.documentElement;
	alert(frame.innerHTML);
	header.innerHTML=frame.innerHTML;

}
