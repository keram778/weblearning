let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');
};

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addTodo);
};

const addTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li');
		newTodo.textContent = todoInput.value;
		createToolsArea(newTodo);
		ulList.append(newTodo);
		todoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Nie wpisano zadania do wykonania.';
	}
};

const createToolsArea = () => {
	const newDiv = document.createElement('div');
	newDiv.classList.add('tools');

	const compBtn = document.createElement('button');
	compBtn.classList.add('complete');
	compBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.textContent = 'EDIT';

	const delBtn = document.createElement('button');
	delBtn.classList.add('delete');
	delBtn.innerHTML = '<i class="fas fa-times"></i>';

	newDiv.append(compBtn, editBtn, delBtn);

	newTodo.append(newDiv);
};

document.addEventListener('DOMContentLoaded', main);
