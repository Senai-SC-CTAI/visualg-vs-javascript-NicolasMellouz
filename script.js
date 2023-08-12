function parimpar() {
    var n = prompt("Digite um número");
    
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
