// const myFunction = function() {
//     this.a = 1;
//     this.b = 2;
// }

// let myObj = new myFunction();

// myFunction.prototype.c = 3;

// myFunction.prototype.d = 4;

// //==============================================

// let objTeste = {
//     a: 100,
//     b: 200
// }

// objTeste.c = 300;
// objTeste.__proto__.d = 400;

// let novoObj = Object.create(objTeste);
// novoObj.e = 500;

// printing(objTeste);
// printing(novoObj)

// function printing(obj) {
//     console.log(Object.getOwnPropertyNames(obj))
//     console.log(obj)
//     let propertiesObjTeste = ""
//     for(let p in obj) {
//         propertiesObjTeste = propertiesObjTeste + `${p}: ${obj[p]} `; 
//     }
//     console.log(propertiesObjTeste);
//     console.log();
// }


// console.log(Object.values(novoObj)); //Está retornando apenas ['c']... pq? Deveria ser ['a' , 'b' , 'c']?

// let objeto = {
//     a : 1,
//     plusOne : function () {
//         return this.a + 1;
//     }
// }
// console.log(objeto.a);
// objeto.a = 10;
// console.log(objeto.plusOne());

// Pegar todas as propriedades de um objeto, mesmo que foram inseridas com prototype.

// function getAllProtoProps(obj) {
//     const protoProps = [];
//   console.log(obj);
//     for(let p in obj) {
//     //   if (!obj.hasOwnProperty(p)) {
//         protoProps.push(p);
//     //   }
//     }
  
//     return protoProps;
//   }
//   console.log(getAllProtoProps(myObj));

//Class ================================================

class Polygon{
    constructor(height, width){
        this._height = height;
        this._width = width;
    }
    get height () {
        return this._height;
    }
    get width () {
        return this._width;
    }
    get area() {
        return this._height * this._width;
    }
    set height (v) {
        this._height = v;
    }
    set width (h) {
        this._width = h;
    }
}
const poligono = new Polygon(10, 15);

console.log(poligono);
console.log(poligono.width);
poligono._width = 20;
console.log(poligono.width);
console.log(poligono);
console.log(poligono.area);

class Square extends Polygon{
    constructor(width){
        super(width, width) //Usa a estrutura do Pai, neste caso o Polygon.
    }
}

const quadrado = new Square(5);
console.log(quadrado);
console.log(quadrado.height);
console.log(quadrado.width);
console.log(quadrado.area);
