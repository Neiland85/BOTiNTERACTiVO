function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function handleResize() {
  console.log('Resized!');
}

window.addEventListener('resize', debounce(handleResize, 200));

