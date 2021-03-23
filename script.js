const linkDesc = [];

const link = document.getElementById('input-link');
const desc = document.getElementById('input-desc');
const outputElem = document.getElementById('output');
const formElem = document.getElementById('form-data');

function render(){
    outputElem.innerText = ''
    linkDesc.forEach(elem=>{
        const divElem = document.createElement('div');
        const imgElem = document.createElement('img');
        const pElem = document.createElement('p');
        divElem.classList.add('card');
        imgElem.src = elem['link'];
        pElem.innerText = elem['text'];
        pElem.classList.add('description')
        divElem.appendChild(imgElem);
        divElem.appendChild(pElem);
        outputElem.appendChild(divElem);
        })
}

formElem.addEventListener('submit', event=> {
    event.preventDefault();
    const link_ = link.value;
    const text = desc.value;
    const link_Desc = {'link': link_, 'text': text}
    linkDesc.push(link_Desc);
    link.value = '';
    desc.value = '';
    render();
})