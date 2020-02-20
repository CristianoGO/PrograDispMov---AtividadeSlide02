const usuarios = [
    {nome: 'pedro', idade: 18, escola: 'ifpi'},
    {nome: 'ana', idade: 22, escola: 'ifpi'},
    {nome: 'lia', idade: 15, escola: 'ibc'},
];

// multiplica as idades...
const mult = usuarios.map(function(item){
    return item.idade * 2;
});

console.log("Idades multiplicadas = ", mult);

// filtrando alunos com no máximo 40 anos...
const filtroIdade = mult.filter(function(item){
    return item == 40;
});

console.log("aluno com no máximo 40 anos = ", filtroIdade);