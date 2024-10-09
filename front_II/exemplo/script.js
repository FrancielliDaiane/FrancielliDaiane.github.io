const titulo = document.querySelector('h1');


//console.log('innerHTML:', titulo.innerHTML);
//console.log('innerTexte:', titulo.innerText)
//console.log('textContent:', titulo.textContent)

const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.textContent = 'Meu link';
ancora.setAttribute('href', 'https://www.ifro.edu.br')
ancora.setAttribute('target', '_blank')
ancora.style.fontSize = '30px'
ancora.style.textDecoration = 'none'
ancora.style.color = '#f90'
ancora.style.fontWeight = 'bold'
body.prepend(ancora)
body.appendChild(ancora);