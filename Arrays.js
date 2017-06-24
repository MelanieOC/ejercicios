var assert = require('assert');

/*Ejercicio 1: funcion que recibe un array y un numero, devuelve la multiplicacion de los
elementos del array e inclyendo el numero*/
function ejercicio1(arr, num){
  if(isNaN(num)){num = 1};//Si no ingresan el parametro num
  return arr.reduce(function(producto,numero){return producto*numero;})*num;
}

/*Ejercicio 2: funcion que recibe un array y un codigo, devuelve un array con los numeros que empiezan o
terminan con el codigo de 3 dígitos*/
function ejercicio2 (arr, numero){
  if(!isNaN(numero)){
    return arr.filter(function(a){
    var primeras = a.toString().substr(0,3);
    var ultimas = a.toString().substr(-3);//extrae los 3 ultimos numeros independiente del tamaño del numero
    return (primeras==numero || ultimas == numero);
    });
  } else {
    return arr;
  }
}

/*Ejercicio 3: funcion que recibe un array y un numero 'x', devuelve los numeros que son divisibles entre
el numero 'x'*/
function ejercicio3 (arr, numero){
  var res = [];
  if(isNaN(numero)){numero = 1};
  arr.forEach(function (a){
    if (a%numero == 0){
      res.push(a);
    }
  });
  return res;
}

/*Ejercicio 4: funcion que recibe un array, retorna un array con el doble incrementado en uno de cada una
de las posiciones*/
function ejercicio4 (arr){
  return arr.map(function(a){return a*2 + 1});
}

/*Ejercicio 5: funcion que recibe un array con temperaturas en celsius y retorna las temperaturas en
grados Fahrenheit*/
function temperatura(celsius) {
  return celsius.map(function (grados) {
      return grados * (9/5) + 32;
  })
}

/*Ejercicio 6: funcion que recibe un array y retorna el producto de sus elementos*/
function multiplicacion (numeros){
  return numeros.reduce(function(total, numero){return total * numero});
}

/*Ejercicio 7: funcion que recibe un array de edades y retorna un array con los años de nacimiento
de los mayores de 18*/
function edades(arr) {
  return arr.filter(edad_ => edad_ > 18).map(edad => (new Date).getFullYear() - edad);
}

//Pruebas unitarias
describe ('Ejercicio 1', function () {
  it ('Test ([4,4,12,5], 9) ', function () {
    assert.equal(8640, ejercicio1([4,4,12,5], 9));
  });
  it ('Test ([4,4,12,5], "Hola") ', function () {
    assert.equal(960, ejercicio1([4,4,12,5], "Hola"));
  });
  it ('Test ([4,4,12,5]) ', function () {
    assert.equal(960, ejercicio1([4,4,12,5]));
  });
});

describe ('Ejercicio 2', function () {
  it ('Test ([784123123, 355676784, 3423543554], 784) ', function () {
    assert.deepEqual([784123123, 355676784], ejercicio2([784123123, 355676784, 3423543554], 784));
  });
  it ('Test ([954742378, 843941207], 207) ', function () {
    assert.deepEqual([843941207], ejercicio2([954742378, 843941207], 207));
  });
  it ('Test ([984738495], "Hola") ', function () {
    assert.deepEqual([984738495], ejercicio2([984738495], "Hola"));
  });
  it ('Test ([784123123, 355676784, 3423543554]) ', function () {
    assert.deepEqual([784123123, 355676784, 3423543554], ejercicio2([784123123, 355676784, 3423543554]));
  });
});

describe ('Ejercicio 3', function () {
  it ('Test ([7, 21, 44, 80, 77, 35], 7) ', function () {
    assert.deepEqual([7, 21, 77, 35], ejercicio3([7, 21, 44, 80, 77, 35], 7));
  });
  it ('Test ([7, 44, 21, 80, 77, 35], 11) ', function () {
    assert.deepEqual([44, 77], ejercicio3([7, 44, 21, 80, 77, 35], 11));
  });
  it ('Test ([7, 21, 44, 80, 77, 35]) ', function () {
    assert.deepEqual([7, 21, 80, 77, 35], ejercicio3([7, 21, 80, 77, 35]));
  });
  it ('Test ([7, 21, 44, 80, 77, 35], 6) ', function () {
    assert.deepEqual([ ], ejercicio3([7, 21, 80, 77, 35], 6));
  });


});

describe ('Ejercicio 4', function () {
  it ('Test ([2, 5, 7, 2, 3, 8, 10]) ', function () {
    assert.deepEqual([5, 11, 15, 5, 7, 17, 21], ejercicio4([2, 5, 7, 2, 3, 8, 10]));
  });
  it ('Test ([5, 11, 3]) ', function () {
    assert.deepEqual([11, 23, 7], ejercicio4([5, 11, 3]));
  });
});

describe ('Ejercicio 5', function () {
  it ('Test ([0 , 10, 30]) ', function () {
    assert.deepEqual([32, 50, 86], temperatura([0 , 10, 30]));
  });
});

describe ('Ejercicio 6', function () {
  it ('Test ([1, 2, 3, 4]) ', function () {
    assert.equal(24, multiplicacion([1, 2, 3, 4]));
  });
});

describe ('Ejercicio 7', function () {
  it ('Test [20, 16, 89, 6]) ', function () {
    assert.deepEqual([1997, 1928], edades([20, 16, 89, 6]));
  });
});
