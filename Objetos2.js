
function ejercicio1 (numInicial, numFinal){
  var objeto = {
    num1: numInicial,
    num2: numFinal
  }
  var respuesta = 0;
  for(var i = objeto.num1; i <= objeto.num2; i++){
    respuesta += i;
  }
  return respuesta;
}

function ejercicio2 (nombre, edad, ocupacion, genero){
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion;
  this.genero = genero;
  this.mensaje = function () {
    if(this.genero == 'Femenino' && this.edad >= 18 && (this.ocupacion == 'Web Developer' || this.ocupacion == 'Estudiante Laboratoria')){
      return 'You`re awesome';
    } else {
      return 'Upsii';
    }
  }
}

function ejercicio3 (array){
  var texto = {

  }

}

function ejercicio4 (nombre, apellido, edad, genero, ciudad, pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
  this.ficha = function () {
    return 'Nombre: ' + this.nombre + ' ' + this.apellido + '\n' + 'Edad: ' + edad + '\n' + 'Pais: ' + this.pais
  }
}

console.log(ejercicio1(1,10));
