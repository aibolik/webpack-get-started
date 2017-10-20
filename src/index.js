import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are ine development mode');
}

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
  	'hello wepback!',
  	'5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());