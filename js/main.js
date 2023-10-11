var input=document.getElementById("input")
function num(f){
	input.value+=f
}
function clear(){
	input.value=innerHTML=""
	}
	function res(){
		var math=eval(input.value)
		input.value=math
	}