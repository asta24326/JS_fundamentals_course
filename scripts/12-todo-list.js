
// "Empty array" to fill after
const todoList = [
	{
		name: 'make dinner',
		dueDate: '22-12-2022',
 	},
	{
		name: 'wash dishes',
		dueDate: '10-03-2023',
	}
];

renderTodoList();

function renderTodoList() {
	// variable to be filled by accumulating paragraphs from array
	let todoListHTML = '';

	for (let i = 0; i < todoList.length; i++) {
		const todoObject = todoList[i];

		// const name = todoObject.name;
		// const dueDate = todoObject.dueDate;
		
		// destructuring of the top
		const { name, dueDate } = todoObject;

		const currentHtml = `
			<div>${name}</div>
			<div>${dueDate}</div>
			<button 
				onclick="
					todoList.splice(${i}, 1);
					renderTodoList();
				"
				class="delete-todo-button"
			>
				Delete
			</button>
		`;
		todoListHTML += currentHtml;
	}

	// Will put our todoListHTML to class in html
	document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
	const nameInputElement = document.querySelector('.js-name-input');
	const name = nameInputElement.value;

	const dateInputElement = document.querySelector('.js-date-input');
	const dueDate = dateInputElement.value;

	todoList.push(
		// {
		// 	name: name,
		// 	dueDate: dueDate
		// }
		// Shorthand property syntax
		{
			name,
			dueDate
		}
	);

	nameInputElement.value = '';
	dateInputElement.value = '';

	renderTodoList();
}


/* There is 3 steps when building websites using JavaScript
1) Save the data
2) Generate the HTML
3) Make it interactive
*/