//Criptografar - Primeira variável colocando o ID da textarea
function criptador() {
  var texto = document.getElementById('right').value.toLowerCase()
  var txtCifrado = texto.replace(/e/gim, 'enter')
  var txtCifrado = txtCifrado.replace(/o/gim, 'ober')
  var txtCifrado = txtCifrado.replace(/i/gim, 'imes')
  var txtCifrado = txtCifrado.replace(/a/gim, 'ai')
  var txtCifrado = txtCifrado.replace(/u/gim, 'ufat')

  //Para desaparecer imagem e textos automaticamente após o click do butão
  document.getElementById('img-right').style.display = 'none'
  document.getElementById('texto').style.display = 'none'
  document.getElementById('left').innerHTML = txtCifrado
  document.getElementById('copy').style.display = 'show'
  document.getElementById('copy').style.display = 'inherit'
}
// Descriptografar
function descriptador() {
  var texto = document.getElementById('right').value.toLowerCase()
  var txtCifrado = texto.replace(/enter/gim, 'e')
  var txtCifrado = txtCifrado.replace(/ober/gim, 'o')
  var txtCifrado = txtCifrado.replace(/imes/gim, 'i')
  var txtCifrado = txtCifrado.replace(/ai/gim, 'a')
  var txtCifrado = txtCifrado.replace(/ufat/gim, 'u')

  document.getElementById('img-right').style.display = 'none'
  document.getElementById('texto').style.display = 'none'
  document.getElementById('left').innerHTML = txtCifrado
  document.getElementById('copy').style.display = 'show'
  document.getElementById('copy').style.display = 'inherit'
}
//Copiar dados selecionados na textarea de resultados "ID" e usando alert para confirmar a copia
function copy() {
  var contenido = document.querySelector('#left')
  contenido.select()
  document.execCommand('copy')

  alert('Copiado!')
}
