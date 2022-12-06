var n1, n2, div
n1=parseFloat(prompt(" digite um valor: "))
if(n1==0){
    alert("não é possível fazer divisão com 0")
}
else{
    n2=parseFloat(prompt("digite outro valor: "))
    if(n2==0){
        alert("não é possível fazer divisão com 0")
    }
    else{
        div=n1/n2
        alert(" a divisão é "+div)
document.write("<h2> o resultado é "+div+"</h2>")
    }
}