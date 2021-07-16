let listaTarefas = document.querySelectorAll('#lista-tarefas')[0]

class Tarefa {
  constructor(nome, categoria, realizada) {
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
  }

  adicionaNaPagina(containerEl) {
  	let novoItem = document.createElement('li')
  	novoItem.classList.toggle('item-tarefa')
  	novoItem.classList.toggle(`categoria-${this.categoria}`)
  	novoItem.innerHTML = this.nome
  	if(this.realizada)
  		novoItem.classList.toggle('marcado')
  	containerEl.appendChild(novoItem)
  }
}

let nomesTarefas = ['Dever de casa', 'Jogar videogame', 'Comprar pão', 'Estudar para prova']
let categoriasTarefas = ['estudos', 'lazer', 'compras', 'estudos']

let tarefas = []

tarefas.push(new Tarefa('Comprar leite', 'compras', false))
tarefas.push(new Tarefa('Escutar chimbinha', 'lazer', true))

for(let i = 0; i < nomesTarefas.length; i++) {
	tarefas.push(new Tarefa(nomesTarefas[i], categoriasTarefas[i], Math.floor(Math.random()*10)%2 == 0))
}

listaTarefas.innerHTML = ""

tarefas.forEach(tarefa => {
	tarefa.adicionaNaPagina(listaTarefas)
})