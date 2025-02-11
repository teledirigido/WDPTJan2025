const btn = document.getElementById('btn');
console.log(btn);

const mainDiv = document.getElementById('main');
/* console.log(mainDiv); */

//Adding an eventListener to the button
btn.addEventListener('click', (event) => {
  console.log(event);
  //The event holds a lot of information.
  //Some of the most valuable properties in it are target and preventDefault()
  event.target.innerText = 'I was clicked!';
  mainDiv.style.display = 'none';
});

function doubleClick() {
  btn.innerText = 'I was clicked twice';
}

function changeStyle() {
  if (btn.style.backgroundColor === 'navy' && btn.style.color === 'white' && btn.innerText === "I'm hovered") {
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
    btn.innerText = "I'm no longer hovered";
  } else {
    btn.style.backgroundColor = 'navy';
    btn.style.color = 'white';
    btn.innerText = "I'm hovered";
  }
}

//You can extract the callback function to be re-used, if needed
btn.addEventListener('dblclick', doubleClick);

btn.addEventListener('mouseover', changeStyle);

btn.addEventListener('mouseleave', changeStyle);

//Adding eventListeners for keydown and keyup
document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyD') {
    console.log('Moving right');
  } else if (event.code === 'KeyA') {
    console.log('Moving left');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyD') {
    console.log('no longer moving right');
  } else if (event.code === 'KeyA') {
    console.log('no longer moving left');
  }
});
