// Obter elementos do DOM
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Adicionar evento de envio do formulário
todoForm.addEventListener('submit', addTodo);

// Função para adicionar uma nova tarefa
function addTodo(e) {
	e.preventDefault();

	// Obter o valor da entrada
	const todoText = todoInput.value.trim();

	if (todoText !== '') {
		// Criar um novo item da lista
		const todoItem = document.createElement('li');
		todoItem.className = 'list-group-item';
		todoItem.innerHTML = `
            ${todoText}
            <button class="btn btn-sm btn-danger delete-btn">Excluir</button>
        `;

		// Adicionar evento de clique para marcar como concluído
		todoItem.addEventListener('click', toggleCompleted);

		// Adicionar evento de clique para excluir a tarefa
		const deleteBtn = todoItem.querySelector('.delete-btn');
		deleteBtn.addEventListener('click', deleteTodo);

		// Adicionar o item à lista
		todoList.appendChild(todoItem);

		// Limpar o campo de entrada
		todoInput.value = '';
	}
}

// Função para marcar uma tarefa como concluída
function toggleCompleted() {
	this.classList.toggle('completed');
}

// Função para excluir uma tarefa
function deleteTodo(e) {
	e.stopPropagation();
	this.parentElement.remove();
}
