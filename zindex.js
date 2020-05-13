let index = 0;

document.getElementById("block-1").style.zIndex = 1;
document.getElementById("block-2").style.zIndex = 2;
document.getElementById("block-3").style.zIndex = 3;
document.getElementById("block-4").style.zIndex = 4;
document.getElementById("block-5").style.zIndex = 5;

function plus() {
	document.getElementById("moving-block").style.zIndex = ++index;
	console.log(parseInt(index));
}

function minus() {
	document.getElementById("moving-block").style.zIndex = --index;
	console.log(parseInt(index));
}