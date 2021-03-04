/*
Classe de Paginação com OOP Object Oriented Programming - Programação
Orientada à Objetos)
Sua tarefa é criar uma
class
para lidar com a paginação de um conteudo.
Paginação é utilizada para dividir listas longas em uma série de páginas.
Imagine como se fossem as páginas da pesquisa do Google, ao invés de mostrar
todos os resultados de uma vez ele mostra os mais importantes primeiro e os
demais ficam nas demais páginas.
Uma paginação aceita 2 parametros:
1. items (padrão: []): Um array de elementos à serem paginados.
2. pageSize (padrão: 10): O números de items que deve ter em cada página.
Então podemos inicializar uma paginação da seguinte maneira:
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4);
E ai podemos utilizar o método getVisibleItems para mostrar o contéudo da página
atual.
console.log(p.getVisibleItems()); // => ['a', 'b', 'c', 'd']
A sua paginação tem que ter os seguintes métodos:
previousPage → Volta 1 página
nextPage → Avança 1 página
firstPage → Vai para a primeira página
lastPage → Vai para a última página
goToPage → Vai para uma página especifica.
Aqui temos um exemplo usando
nextPage e lastPage:
p.nextPage();
console.log(p.getVisibleItems());
// ["e", "f", "g", "h"]
p.lastPage();
console.log(p.getVisibleItems());
// ["y", "z"]
Notas
Você pode usar as classes do ES6 usando class ou pode usar funções
construtoras. Fica à seu critério.


Os métodos usado na paginação eles podem ser encadeavéis, assim você
pode chamar um no outro:
p.goToPage(5).nextPage()
p.nextPage().nextPage()
p.nextPage().nextPage().goToPage(2).previousPage()
*/
