function parimpar() {
   var n = document.getElementById("numero").value;
    
    if (isNaN(n)) {
        alert("Erro: entrada inválida. Por favor, digite um número válido.");
    } else {
        if (n % 2 === 0) {
            alert("Par");
        } else {
            alert("Ímpar");
        }
    }
}
