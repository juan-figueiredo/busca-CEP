function consultaEndereco(){
  const cep = document.getElementById('cep').value

  if(cep.length !== 8){
    alert("Cep inválido!");
    return;
  }
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url).then(function(response){
    response.json().then(mostrarEndereco)
    })
  };

  function mostrarEndereco(dados){
    let result = document.getElementById("result")
    if(dados.erro){
      resultado.innerHTML = "Não foi possivel localizar endereço"
    }else{
    result.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                        <p>Complemento: ${dados.complemento}</p>
                        <p>Bairro: ${dados.bairro}</p>
                        <p>Localidade: ${dados.localidade}</p>
                        <p>UF: ${dados.uf}</p>`
                      }
  }
