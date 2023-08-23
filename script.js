
var nomes = [];


var profissoes = [];

function adicionarPessoa() {
  var nome = document.getElementById("nomeInput").value;
  var profissao = document.getElementById("profissaoInput").value;

  nomes.push(nome);
  profissoes.push(profissao);

  console.log("Nova pessoa adicionada:");
  console.log("Nome: " + nome);
  console.log("Profissão: " + profissao);

  exibirPessoas();


  document.getElementById("nomeInput").value = "";
  document.getElementById("profissaoInput").value = "";
}

function removerPessoa() {
  var nome = document.getElementById("nomeInput").value;
  var index = nomes.indexOf(nome);

  if (index !== -1) {
    nomes.splice(index, 1);
    profissoes.splice(index, 1);
    console.log("Pessoa removida: " + nome);
  } else {
    console.log("Pessoa não encontrada: " + nome);
  }

  exibirPessoas();

  
  document.getElementById("nomeInput").value = "";
  document.getElementById("profissaoInput").value = "";
}

function exibirPessoas() {
  var pessoasTextarea = document.getElementById("pessoasTextarea");
  pessoasTextarea.value = "";

  for (var i = 0; i < nomes.length; i++) {
    var pessoa = nomes[i] + " - " + profissoes[i];
    pessoasTextarea.value += pessoa + "\n";
  }
}