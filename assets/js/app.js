//Crear variables globales
var container = document.getElementById('container');
var newContainer = document.getElementById('newContainer');
var btn = document.getElementById('btn');
var list = document.getElementById('newList');
var taskList = document.getElementById('tasksList');
var forms = document.getElementById('forms');
var listToHide = document.getElementById('listToHide');

//evento en el que al hacer click en el primer input, este se oculta y aparece el formulario
listToHide.addEventListener('click', function () {
	listToHide.style.display = 'none';
	forms.style.display = 'inline-block';
});

//evento en que al hacer click en el botón, guarda el nombre de lista
btn.addEventListener('click', function () {
	//obtener lista ingresada en el input
	var list = document.getElementById('newList').value;
	//limpiar el text area
	list.value = '';
	//crear div que contenga la lista
	var tasksList = document.createElement('div');
	//crear título
	var newListName = document.createElement('p');
	//dándole id al nombre de la lista
	newListName.setAttribute('id','listName');
	//creando nodo de texto
	var listContent = document.createTextNode(list);
	//creando nuevo link para nuevas tareas, con sus atributos
	var nextStep = document.createElement('a');
	nextStep.setAttribute('href','#');
	nextStep.setAttribute('id','nextStep');
	var nextStepText = document.createTextNode('Añadir una tarjeta');
	//appencheando, jiji
	newListName.appendChild(listContent);
	nextStep.appendChild(nextStepText);
	taskList.appendChild(newListName);
	// dándole id para dar estilos
	taskList.setAttribute('id', 'newTaskList');
	taskList.appendChild(nextStep);
	newContainer.appendChild(taskList);

});

