const container = document.querySelector('#container');
const totaltime = 7500;
const breathTime = (totaltime/5)*2;
const holdTime = totaltime/5;

const text = document.getElementById('text');

breathAnimation();

function breathAnimation() {
	text.innerText = 'Breath In!';
	container.className = 'container grow';

	setTimeout(()=>{
		text.innerText= 'Hold';
		setTimeout(()=>{
			text.innerText= 'Breath Out!';
			container.className = 'container shrink';
		}, holdTime);
	}, breathTime);
}

setInterval(breathAnimation, totaltime);