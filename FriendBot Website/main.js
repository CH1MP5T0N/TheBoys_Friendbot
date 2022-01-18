let VIDEO=null;
let CANVAS=null;
let CONTEXT=null;

function main(){
	CANVAS=document.getElementById("myCanvas");
	CONTEXT=CANVAS.getContext("2d");
	// video window size
	CANVAS.width=1000;
	CANVAS.height=1000;

	let promise=navigator.mediaDevices.getUserMedia({video:true});
	promise.then(function(signal){
		VIDEO=document.createElement("video");
		VIDEO.srcObject=signal;
		VIDEO.play();

		VIDEO.onloadeddata=function(){
			updateCanvas();
		}
		//erorr callback
	}).catch(function(err){
		alert("Camera error: "+err)
	});
}

function updateCanvas(){
	CONTEXT.drawImage(VIDEO,300,0,500,500);
	//recursive function to continously update video frames
	window.requestAnimationFrame(updateCanvas);
}
