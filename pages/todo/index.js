
function enviar(t) {
    t.preventDefault()
    const teste = t.target
    const testeForm = new FormData(teste)


    const tarefa = { nome: testeForm.get('nomeTarefa'), descricao: testeForm.get('descricaoTarefa') }


    let tarefas = JSON.parse(localStorage.getItem('listaTarefas'))
    if (tarefas === null) {
        tarefas = []
    }

    tarefas.push(tarefa)
    localStorage.setItem('listaTarefas', JSON.stringify(tarefas))

    adcionaTarefa(tarefa)
    limpaInput()
}

function limpaInput() {
    titulo.value = ""
    descricaoTarefa.value = ""
}

function adcionaTarefa(tarefa) {
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    const tituloTarefa = document.createElement('h3')
    const descricao = document.createElement('p')
    tituloTarefa.textContent = tarefa.nome
    descricao.textContent = tarefa.descricao

    li.appendChild(tituloTarefa)
    li.appendChild(descricao)
    ul.appendChild(li)
}

function exibeTarefa(tarefas) {

    const ul = document.querySelector('ul')
    tarefas.forEach(tarefa => {
        const li = document.createElement('li')
        const tituloTarefa = document.createElement('h3')
        const descricao = document.createElement('p')
        tituloTarefa.textContent = tarefa.nome
        descricao.textContent = tarefa.descricao

        li.appendChild(tituloTarefa)
        li.appendChild(descricao)
        ul.appendChild(li)
    })

}

document.addEventListener('DOMContentLoaded', function () {
    exibeTarefa(JSON.parse(localStorage.getItem('listaTarefas')))
})