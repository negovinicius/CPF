let number = document.querySelector('input#fnum');

let list = document.querySelector('select#flista');

let res = document.getElementById('res');

let adicionados = []

function isNumber(n) {
    return /^\d{11}$/.test(String(n).replace(/\s/g, ''));
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1;
}
function validar() {
    if(isNumber(number.value) && !inLista(number.value, adicionados)) {
        adicionados.push(Number(number.value));

        let item = document.createElement('option')
        item.text = `O CPF ${number.value} é valido e foi adicionado.`
        list.appendChild(item)
        res.innerHTML = ''

    }else {
        window.alert('Valor invalido')
    }
}




