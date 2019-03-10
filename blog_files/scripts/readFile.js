function readData(){
    var data = document.getElementById("data").childNodes;
    var refs = document.getElementById("references");
    
    
    console.log(data);
    for(var i = 0; i < data.length;i++){
	str = ""
	if(data[i] === "\n"){
	}else{
	    var t = typeof(data[i].data);
	    if(t == "string"){
	    }else{
		var name = data[i].getAttribute("name").split(" ");
		var finit = name[0].charAt(0);
		var lname = name[1];
		var type = data[i].getAttribute("type");
		var year = data[i].getAttribute("year");
		var city = data[i].getAttribute("city");
		var state = data[i].getAttribute("state");
		var volume = data[i].getAttribute("volume");
		var issue = data[i].getAttribute("issue");
		var href = data[i].getAttribute("href");
		var title = data[i].innerHTML;
		var publisher = data[i].getAttribute("publisher");
		if(type==="web"){
		    str="<p>"+lname+", "+finit+". ("+year+"). "+title+", "+volume+"("+issue+')</p><p>Retrieved from <a href="'+href+'">'+href+'</a></p>';
		}else if(type==="book"){
		    str="<p>"+lname+", "+finit+". ("+year+"). "+title+". "+city+", "+state+": "+publisher+".</p>"
		}
		/*
		str += name[1]+", "+name[0].charAt(0)+". ";
		str += "("+data[i].getAttribute("year")+"). ";
		str += data[i].innerHTML+", ";
		str += data[i].getAttribute("volume")+"("+data[i].getAttribute("issue")+")";
		str = "<p>"+str+"</p>";
		str += '<p>Retrieved from <a href="'+data[i].getAttribute("href")+'">'+data[i].getAttribute("href")+"</a></p>";
		*/
		str = '<div class="ref">'+str+'</div>'
		refs.innerHTML += str;
	    }

	}
    }
}
