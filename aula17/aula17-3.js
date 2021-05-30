/*
Escreva um programa em JavaScript que receba um objeto e gere um novo
objeto onde os valores viraram as chaves e as chaves viraram os valores.
const student = {
name: 'Marcle Rodrigues',
grade: 'A',
age: 26
};
transformKeysAndValues(student)
=> { 'Marcle Rodrigues': 'name', 'A': 'grade', '26': 'age' }
*/

const student = {
    name: 'Marcle Rodrigues',
    grade: 'A',
    age: 26
};

transformKeysAndValues(student)

function transformKeysAndValues(student){
    newObject = new Object(); //1
    for (let i in student){ //n
        newObject[student[i]]=i; //2
    }
    console.log(newObject); //1
}

// O(transformKeysAndValues(student)) = 1+n(2)+1
// O(transformKeysAndValues(student)) = 2+2n
// O(transformKeysAndValues(student)) = n
// Complexidade ===> O(n)
