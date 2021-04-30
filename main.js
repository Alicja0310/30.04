function pobieranie(val){
    console.log(val)
}

function połącz(){
    const inp1 = document.getElementById('inp1').value
    const inp2 = document.getElementById('inp2').value
    const inp3 = document.getElementById('inp3').value
    if(inp1.value !== Number || inp2.value !== Number || inp3.value !== Number) {
        alert ("Wpisz liczbe")
    }else(inp1.value == Number || inp2.value == Number || inp3 == Number)
    console.log(inp1.value + inp2.value + inp3.value)
}

function tablica(){
    const inputs = document.querySelectorAll('[type="text"')
    let wynik = 0
    let inp1 = inputs[0].value
    inp1 = parseInt(inp1)

    if(inp1 !== NaN){
        wynik += inp1
    }
}