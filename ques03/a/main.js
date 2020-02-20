const aluno = {
    nome: 'carlos',
    endereco:{
        cidade: 'corrente',
        uf: 'pi',
    }
}

const {nome, endereco} = aluno;
console.log(nome, " e de", endereco.cidade, " do ", endereco.uf);