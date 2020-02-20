const usuarios = [
    {nome: 'pedro', idade: 18, escola: 'ifpi'},
    {nome: 'ana', idade: 22, escola: 'ifpi'},
    {nome: 'lia', idade: 15, escola: 'ibc'},
];

const localEstudo = usuarios.filter(function(item){
    return item.escola == 'ifpi';
});

console.log("Estudantes apenas do IFPI = ", localEstudo);