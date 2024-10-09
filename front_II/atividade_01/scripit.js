
const itensMenu = [
    { nome: 'Inicio', url: 'index.html'},
    {nome: 'Sobre', url: 'Sobre mim'},
    {nome: 'Contato', url: 'contato.html'}

];
itensMenu.forEach(item => {
    itensMenu.url
})

const menu = () => {
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const body = document.querySelector('body');
nav.appendChild(ul);
header.appendChild(nav);
body.prepend(header);
}

function adicionarLi(){
    const ul = document.querySelector('ul');
    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', item.url);
        a.textContent = item.nome.toUpperCase();
        li.appendChild(a);
        ul.appendChild(li);  
    });
}

 menu ()
 adicionarLi()