const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement('p');
redText.classList.add('redText');
redText.textContent = 'Hey I\'m Red'
redText.style.color = 'red'

container.appendChild(redText);

const blueH3 = document.createElement('h3');
blueH3.classList.add('blueH3');
blueH3.textContent = 'I\'m a blue h3!'
blueH3.style.color = 'blue'

container.appendChild(blueH3);

const div = document.createElement('div')
div.classList.add('div')
div.style.border = ('5px, solid, black')
div.style.backgroundColor = 'pink'


const innaDiv = document.createElement('h1')
innaDiv.classList.add('innaDiv')
innaDiv.textContent = 'I\'m in a div'

const meToo = document.createElement('p')
meToo.classList.add('meToo')
meToo.textContent = 'ME TOO!'

div.appendChild(innaDiv)
div.appendChild(meToo)
container.appendChild(div)

// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});



