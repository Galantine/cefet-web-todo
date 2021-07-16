let listaTarefas = document.querySelectorAll('#lista-tarefas')[0]
let campoNovaTarefaNome = document.querySelectorAll('#nova-tarefa-nome')[0]
let campoNovaTarefaCategoria = document.querySelectorAll('#nova-tarefa-categoria')[0]
let botaoAdicionar = document.querySelectorAll('#incluir-nova-tarefa')[0]

class Tarefa {
  constructor(nome, categoria, realizada) {
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
  }

  adicionaNaPagina(containerEl) {
  	let novoItemLista = document.createElement('li')
  	novoItemLista.classList.toggle('item-tarefa')
  	novoItemLista.classList.toggle(`categoria-${this.categoria}`)
  	novoItemLista.innerHTML = this.nome
  	if(this.realizada)
  		novoItemLista.classList.toggle('marcado')
  	containerEl.appendChild(novoItemLista)
  	return novoItemLista
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

botaoAdicionar.addEventListener('click', e => {
	let novaTarefa = new Tarefa(campoNovaTarefaNome.value, campoNovaTarefaCategoria.value, false)
	tarefas.push(novaTarefa)
	let novoItemLista = novaTarefa.adicionaNaPagina(listaTarefas)
	campoNovaTarefaNome.focus()
});