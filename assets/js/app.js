//Crear variables globales
var container = document.getElementById('container');
var btn = document.getElementById('btn');
var task = document.getElementById('newTask');
var taskList = document.getElementById('tasksList');
var newTasks = document.getElementById('newList');
var forms = document.getElementById('forms');
var listToHide = document.getElementById('listToHide');

//evento en el que al hacer click en el primer input, este se oculta y aparece el formulario
listToHide.addEventListener('click', function () {
	listToHide.style.display = 'none';
	forms.style.display = 'inline-block';
});



