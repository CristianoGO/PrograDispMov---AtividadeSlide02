const usuarios = [
    {nome: 'pedro', idade: 18, escola: 'ifpi'},
    {nome: 'ana', idade: 22, escola: 'ifpi'},
    {nome: 'lia', idade: 15, escola: 'ibc'},
];

const procuraAluno = usuarios.find(function(item){
    return item.escola == 'ibc';
});

console.log("Aluno do IBC = ", procuraAluno);