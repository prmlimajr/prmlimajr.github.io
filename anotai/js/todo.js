let addTarefa = document.getElementById('include')
let btnIncluirTarefa = document.getElementById('btn-include')
let listaTarefa = document.getElementById('lista-tarefa')
let btnLimparLista = document.getElementById('reset')

// Marca tarefa concluída
listaTarefa.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('concluido')
    }
})

// Adiciona tarefa na lista
btnIncluirTarefa.addEventListener('click', adicionaItemLista)

function adicionaItemLista() {
    let novaTarefa = addTarefa.value

    if (novaTarefa === ''){
        alert('Insira uma nova tarefa para incluir na lista.')
    } else {
        let elementLi = document.createElement('li')
        elementLi.innerText = novaTarefa
        listaTarefa.appendChild(elementLi)
        addTarefa.value = ''
    }
}

// Remove tarefas concluídas
btnLimparLista.addEventListener('click', () => {
    let removerConcluido = document.getElementsByClassName('concluido')

    while (removerConcluido.length > 0) {
        removerConcluido[0].remove()
    }
})

