let number = document.querySelector('input#fnum');

let list = document.querySelector('ul#flista');

let res = document.getElementById('res');

let adicionados = []

function isNumber(n) {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(String(n).replace(/\s/g, ''));
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1;
}

number.addEventListener('keypress', () => {

    let inputlength = number.value.length

    if(inputlength === 3 || inputlength === 7) {
        number.value += '.'
    } else if (inputlength === 11) {
        number.value += '-'
    }
})

function validar() {
    if(isNumber(number.value) && !inLista(number.value, adicionados)) {
        adicionados.push(Number(number.value));

        let item = document.createElement('li')
        item.textContent = `O CPF ${number.value} é valido e foi adicionado.`
        list.appendChild(item)
        res.innerHTML = ' ';
        ad

    } else {
        window.alert('Valor invalido')
        
    }
    number.value = '';
}




