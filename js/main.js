var firstVal=0;
var op=""

function add(value) {
	val = document.getElementById('res').value;
	document.getElementById('res').value=val+value;
	document.getElementById("res").className = "res";
	document.getElementById("title").className="title";
	if (document.getElementById('reset').value != ""){
		document.getElementById('reset').className="btn";
	}
}
function reset() {
	document.getElementById('res').value="";
	document.getElementById("res").className = "res";
	document.getElementById('reset').className="gray";
	document.getElementById("title").className="title";
}
function operation(opt){
	firstVal = document.getElementById("res").value;
	op = opt;
	document.getElementById("res").value="";
	document.getElementById("title").className="title";
}
function equal(){
	if(firstVal !=""){
	secondVal = document.getElementById("res").value;
	document.getElementById("res").value="=";
	if(op == "+"){
		console.log(op);
		resualt = parseInt(firstVal) + parseInt(secondVal);
	}else if(op == "-"){
		console.log(op);
		resualt = parseInt(firstVal) - parseInt(secondVal);
	}else if(op == "/"){
		console.log(op);
		resualt = parseInt(firstVal) / parseInt(secondVal);
	}else if(op == "*"){
		console.log(op);
		resualt = parseInt(firstVal) * parseInt(secondVal);
	}
	else{
		document.getElementById("title").className="title-wrong";
	}
	document.getElementById("res").value=resualt;
	}else{
		document.getElementById("title").className="title-wrong";
	}
	
}