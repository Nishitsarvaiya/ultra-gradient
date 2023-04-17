import './style.scss';

const cursor = document.querySelector('.cursor-shape');
let mouseX = 0,
	mouseY = 0,
	currentX = 0,
	currentY = 0;

const lerp = (a, b, n) => {
	return (1 - n) * a + n * b;
};

const getMousePos = (e) => {
	mouseX = e.pageX || e.clientX;
	mouseY = e.pageY || e.clientY;
};

const update = () => {
	window.requestAnimationFrame(update);

	currentX = lerp(currentX, mouseX, 0.12);
	currentY = lerp(currentY, mouseY, 0.12);

	cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
};

update();

document.addEventListener('mousemove', getMousePos);
