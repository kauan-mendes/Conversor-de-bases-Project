
function condecimal(){
    var decimal = parseInt((document.getElementById('input_decimal').value))
    var binario = decimal.toString(2)
    var hexadecimal = decimal.toString(16)
    var octal = decimal.toString(8)

    mostrarbina.innerHTML = `<span style="font-size:18px;">Binário:${binario}</span> <br><br><span style="font-size:18px;"> Hexadecimal:${hexadecimal}</span><br><br><span style="font-size:18px;"> Octal:${octal}</span>`
}

function conbinario(){
    var decimal = parseInt(document.getElementById('input_binario').value, 2)
    var hexadecimal = decimal.toString(16)
    var octal = decimal.toString(8)
    
    mostrarbina.innerHTML = ` <span style="font-size:18px;">Decimal:</span>${decimal} <br><br><span style="font-size:18px;">Hexadecimal:</span>${hexadecimal}<br><br><span style="font-size:18px;"> Octal:</span>${octal}`
}

function conoctal(){
    var octal = parseInt(document.getElementById('input_octal').value, 8)
    var binario = octal.toString(2)
    var hexadecimal = octal.toString(16)
    
    mostrarbina.innerHTML = `<span style="font-size:18px;">Decimal:</span>${octal} <br> <br><span style="font-size:18px;">Hexadecimal:</span>${hexadecimal}<br><br><span style="font-size:18px;"> Binário:</span>${binario}`
}

function conhexa(){
    var hexa = parseInt(document.getElementById('input_hexa').value, 16)
    var binario = hexa.toString(2)
    var octal = hexa.toString(8)
    

    mostrarbina.innerHTML = `<span style="font-size:18px;">Decimal:</span>${hexa} <br> <br><span style="font-size:18px;"> Binário:</span>${binario}<br><br><span style="font-size:18px;"> Octal:</span>${octal}`
}
