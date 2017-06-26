//Ejercicio 1: recibe dos numeros y devuelve la suma del rango usando objeto literal
function ejercicio1 (numInicial, numFinal){
  var objeto = { //se crea un objeto literal que contiene los parametros
    Inicio: numInicial,
    Fin: numFinal
  }
  var respuesta = 0;
  if(objeto.Inicio < objeto.Fin){
    for(var i = objeto.Inicio; i <= objeto.Fin; i++){ //smatoria desde el numInicial al numFinal
      respuesta += i;
    }
  } else {
    for(var i = objeto.Fin; i <= objeto.Inicio; i++){ //smatoria desde el numInicial al numFinal
      respuesta += i;
    }
  }

  return respuesta;
}

//Ejercicio 2: Te dice You're awesome si eres mujer mayor de 18 y una Web Developer o Estudiante Laboratoria
function ejercicio2 (nombre, edad, ocupacion, genero){
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion;
  this.genero = genero;
  this.mensaje = function () {
    if(this.genero.toLowerCase() == 'femenino' && this.edad >= 18 && (this.ocupacion.toLowerCase() == 'web developer' || this.ocupacion.toLowerCase() == 'estudiante laboratoria')){
//Ponemos lowercase para que acepte en mayusculas o minusculas
      return "You're awesome";
    } else {
      return 'Upsii';
    }
  }
}

//Ejercicio 3: crea un string donde esta concatenado las propiedades de un objeto texto creado a partir de un array
function ejercicio3 (array){
  var texto = array.reduce(function(a, b, indice) { //creamos el objeto texto mediante reduce
    a['propiedad' + (indice + 1)] = b;
    return a;
  }, {}); // obtenemos un objeto texto tipo {propiedad1: 6}
  var respuesta = ''; //concatenamos las propiedades de texto
  Object.getOwnPropertyNames(texto).forEach(
    //el metodo object.getOwnPropertyNames nos proporciona el nombre de cada propiedad y sus valores
    function (val) {
      respuesta += val + ' --> ' + texto[val] + '; ';
    }
  );
  return respuesta.slice(0, -2);
}

//Ejercicio 4: crea una ficha con tu nombre, apellido, edad y pais
function ejercicio4 (nombre, apellido, edad, genero, ciudad, pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
  this.ficha = function () {
    return 'Nombre: ' + this.nombre + ' ' + this.apellido + '\n' + 'Edad: ' + edad + '\n' + 'Pais: ' + this.pais;
  }
}

//Testear
var assert = require('assert');

describe ('Ejercicio 1', function () {
  it ('Test ejercicio1(1,10) ', function () {
    assert.equal(55, ejercicio1 (1, 10));
  });
  it ('Test ejercicio1(10,1) ', function () {
    assert.equal(55, ejercicio1 (10, 1));
  });
});

describe ('Ejercicio 2', function () {
  it ('Test ejercicio2("Tamara", 22, "Estudiante Laboratoria", "Femenino") ', function () {
    assert.equal("You're awesome", new ejercicio2("Tamara", 22, "Estudiante Laboratoria", "Femenino").mensaje());
  });
  it ('Test ejercicio2("Jorge", 22, "Estudiante Laboratoria", "Masculino") ', function () {
    assert.equal('Upsii', new ejercicio2("Jorge", 22, "Estudiante Laboratoria", "Maculino").mensaje());
  });
  it ('Test ejercicio2("Maria", 17, "Estudiante Laboratoria", "Femenino") ', function () {
    assert.equal('Upsii', new ejercicio2("Maria", 17, "Estudiante Laboratoria", "Femenino").mensaje());
  });
  it ('Test ejercicio2("Rosa", 30, "web Developer", "femenino") ', function () {
    assert.equal("You're awesome", new ejercicio2("Rosa", 30, "web Developer", "femenino").mensaje());
  });
  it ('Test ejercicio2("Rosangela", 25, "asistente", "femenino") ', function () {
    assert.equal('Upsii', new ejercicio2("Rosangela", 25, "asistente", "femenino").mensaje());
  });
});

describe ('Ejercicio 3', function () {
  it ('Test ejercicio3 ([6,5,4,3,2,1]) ', function () {
    assert.deepEqual('propiedad1 --> 6; propiedad2 --> 5; propiedad3 --> 4; propiedad4 --> 3; propiedad5 --> 2; propiedad6 --> 1', ejercicio3 ([6,5,4,3,2,1]));
  });
  it ('Test ejercicio3 ([10,5,3,0,23]) ', function () {
    assert.deepEqual('propiedad1 --> 10; propiedad2 --> 5; propiedad3 --> 3; propiedad4 --> 0; propiedad5 --> 23', ejercicio3 ([10,5,3,0,23]));
  });
});

describe ('Ejercicio 4', function () {
  it ('Test ejercicio4 (Blanca, Perez, 19, Femenino, Santiago, Chile) ', function () {
    assert.equal('Nombre: Blanca Perez\nEdad: 19\nPais: Chile', new ejercicio4('Blanca', 'Perez', 19, 'Femenino', 'Santiago', 'Chile').ficha());
  });
});
