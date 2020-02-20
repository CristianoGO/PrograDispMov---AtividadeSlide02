const usuario = {nome: 'bia', idade: 18};
const mostraUsuario = (item)=>(item.nome);
const mostraUsuario2 = (item2)=>(item2.idade);

console.log("Mostrando o usuário = \n", "nome: ", mostraUsuario(usuario), "\nidade: ", mostraUsuario2(usuario));