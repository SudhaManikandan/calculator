var input=document.getElementById("input");
function num(f){
	input.value+=f
}
function clearInput() {
	var input=document.getElementById("input");
	input.value=innerHTML="";
	console.log("clear");
	}
	function res(){
		var math=eval(input.value)
		input.value=math
	}