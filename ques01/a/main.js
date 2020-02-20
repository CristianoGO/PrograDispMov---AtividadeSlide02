const usuarios = [
    {nome: 'pedro', idade: 18, escola: 'ifpi'},
    {nome: 'ana', idade: 22, escola: 'ifpi'},
    {nome: 'lia', idade: 15, escola: 'ibc'},
];

const idades = usuarios.map(function(item){
    return item.idade;
});

console.log("todas as idades = ", idades);