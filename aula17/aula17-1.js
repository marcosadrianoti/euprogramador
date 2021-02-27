/*
Escreva um programa em JavaScript que liste todas as propriedades de um
objeto.
const student = {
name: 'Marcle Rodrigues',
grade: 'A',
age: 26
};
// => name, grade, age
*/

let list = "";
const student = {
    name: 'Marcle Rodrigues',
    grade: 'A',
    age: 26
};

for(property in Object(student)){
    list = list + (list == "" ? property : `, ${property}`);
}

console.log(list);