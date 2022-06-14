function sumar(){
  var a = parseInt(document.getElementByID('num1').value);
  var b = parseInt(document.getElementByID('num2').value);
  document.getElementByID('sum').innerHTML = a + b;
}
