
class Tarefa {
  constructor(nome, categoria, realizada) {
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
  }
}

let nomesTarefas = ['Dever de casa', 'Jogar videogame', 'Comprar pão', 'Conversar com amigos pelo discord']
let categoriasTarefas = ['estudos', 'lazer', 'compras', 'lazer']

let tarefas = []

tarefas.push(new Tarefa('Comprar leite', 'compras', false))
tarefas.push(new Tarefa('Escutar chimbinha', 'lazer', true))

for(let i = 0; i < nomesTarefas.length; i++) {
	tarefas.push(new Tarefa(nomesTarefas[i], categoriasTarefas[i], Math.floor(Math.random()*10)%2 == 0) )

}
