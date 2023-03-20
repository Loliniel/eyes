const balls = document.getElementsByClassName('ball');
const eyes = document.getElementsByClassName('eye');


/*
 *		onmousemove
 *
 *		Event triggered whenever the mouse has moved
 *
 *		Gets the current mouse position and calculates where
 *		the eyeball should be inside the eye.
 *
 */
document.onmousemove = (event) => {
	const x = (event.clientX * 100) / window.innerWidth + '%';
	const y = (event.clientY * 100) / window.innerHeight + '%';

	for (let i = 0; i < 2; i++) {
		balls[i].style.left = x;
		balls[i].style.top = y;
		balls[i].transform = 'translate(-' + x + ',-' + y + ')';
	}
};


/*
 *		blink
 *
 *		Function that performs the actual blink animation.
 *
 */
function blink() {
	/*	Sets the eye and eyeball color to the background color to simulate
		the appearance of a fully closed eye. */
	eyes[0].style.backgroundColor = "#14495e";
	eyes[1].style.backgroundColor = "#14495e";
	balls[0].style.backgroundColor = "#14495e";
	balls[1].style.backgroundColor = "#14495e";
	
	/*	Sets a timeout to wait 50ms, then reset the color of the eye to white,
		and the color of the eyeball to black. */
	setTimeout(() => {
		eyes[0].style.backgroundColor = "#fff";
		eyes[1].style.backgroundColor = "#fff";
		balls[0].style.backgroundColor = "#000000";
		balls[1].style.backgroundColor = "#000000";
	}, 50);
}


/*
 *		blinkLoop
 *
 *		Function that handles the blinking loop and calls the blink
 *		function in a random amount of time from 500ms to 5500ms.
 *
 */
function blinkLoop() {
	let rand = (Math.random()*5000)+500;
	console.log("blink wait = "+rand);
	setTimeout(() => {
		blink();
		blinkLoop();
	}, rand);
}


/*
 *		window.onload
 *
 *		Main entry point for the javascript file that is called as
 *		soon as the entire contents of the window have been loaded.
 *
 */
window.onload = (event) => {
	blinkLoop();
}