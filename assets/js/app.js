var counter = 1;
var container = document.getElementById('container');
var btn = document.getElementById('btn');
var task = document.getElementById('newTask');
var taskList = document.getElementById('tasksList');
var newTasks = document.getElementById('tasks');
var form = document.getElementById('form');
form.style.display = 'none';
btn.addEventListener('click', addTask);

