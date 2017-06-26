/* Ejercicio 1: calcular area de rectangulo usando objeto constructor*/
function Rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.area = function(){ //funcion que calcula el area base * altura
    return this.base * this.altura;
  }
}

/* Ejercicio 2: calcular edad actual ingresando fecha de nacimiento*/
function nacimiento(nombre, dia, mes, ano) {
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;
  this.edad = function () {
    var cumple = new Date(this.ano, this.mes - 1, this.dia);//transforma en fecha lo ingresado
    var hoy = new Date();
    var años = hoy.getFullYear() - cumple.getFullYear();// año actual menos año de nacimiento da la edad
    //Si a la fecha actual aun no ha cumplido años
    cumple.setFullYear(hoy.getFullYear());
    if (hoy < cumple){
      años--;//si aun no ha cumplido se disminuye
    };
    return 'La edad actual de ' + this.nombre + ' es ' + años;
  }
}

/* Ejercicio 3: saludo, mi nombre, edad y pasatiempo*/
function hola(nombre, edad, pasatiempo) {
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
  this.saludo = function() {
    return 'Hola, soy ' + this.nombre + ' tengo ' + this.edad + ' años y me gusta ' + this.pasatiempo;
  }
}
//pruebas unitarias con mocha
var assert = require('assert');
describe ('Ejercicio 1', function () {
  it ('Test Rectangulo(3,6) ', function () {
    assert.equal(18, new Rectangulo(3,6).area());
  });
  it ('Test Rectangulo(10,2) ', function () {
    assert.equal(20, new Rectangulo(10,2).area());
  });

});
describe ('Ejercicio 2', function () {
  it ('Test nacimiento("Maria", 24, 12, 1995) ', function () {
    assert.equal('La edad actual de Maria es 21', new nacimiento('Maria', 24, 12, 1995).edad());
  });
  it ('Test nacimiento("Juan", 22, 2, 1995) ', function () {
    assert.equal('La edad actual de Juan es 22', new nacimiento('Juan', 22, 2, 1995).edad());
  });
  it ('Test nacimiento("Melanie", 26, 6, 1994) ', function () {
    assert.equal('La edad actual de Melanie es 23', new nacimiento('Melanie', 26, 6, 1994).edad());
  });
});
describe ('Ejercicio 3', function () {
  it ('Test hola("Melanie", 22, "jugar") ', function () {
    assert.equal('Hola, soy Melanie tengo 22 años y me gusta jugar', new hola("Melanie", 22, "jugar").saludo());
  });
  it ('Test hola("Sheyla", 25, "programar") ', function () {
    assert.equal('Hola, soy Sheyla tengo 25 años y me gusta programar', new hola("Sheyla", 25, "programar").saludo());
  });
});
