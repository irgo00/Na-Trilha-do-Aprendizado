/*mostrar que um valor é menor ou maior q o outro*/

var n1, n2
n1=parseInt(prompt("Entre com um valor: "))
n2=parseInt(prompt("Entre com outro valor: "))

if (n1<n2) {
    alert(n1+" é menor do que "+n2)
}
else if (n1>n2) {
    alert(n1+" é maior do que "+n2)
}
else{
    alert("Os números são iguais")
}