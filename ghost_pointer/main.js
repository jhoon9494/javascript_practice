const body = document.querySelector('body');
const ghost = document.querySelector('.ghost');

body.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;
  ghost.style.left = `${x}px`;
  ghost.style.top = `${y}px`;
});
