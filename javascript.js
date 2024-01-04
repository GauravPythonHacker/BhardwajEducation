const navLinks = document.querySelectorAll('.bottom-nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
link.addEventListener('click', () => {
navLinks.forEach(link => link.classList.remove('active'));
link.classList.add('active');

const targetSection = document.querySelector(link.getAttribute('href'));
sections.forEach(section => {
section.classList.remove('active');
if (`#${section.id}` === link.getAttribute('href')) {
section.classList.add('active');
}
});
});
});
let tasks = [];

// Function to handle task creation
document.getElementById('taskForm').addEventListener('submit', function(event) {
event.preventDefault();

const title = document.getElementById('taskTitle').value;
const desc = document.getElementById('taskDesc').value;
const deadline = document.getElementById('deadline').value;

const task = { title, desc, deadline };
tasks.push(task);

displayTasks();
document.getElementById('taskForm').reset();
});

// Function to display tasks
function displayTasks() {
const tasksList = document.getElementById('tasks');
tasksList.innerHTML = '';

tasks.forEach((task, index) => {
const li = document.createElement('li');
li.innerHTML = `<strong>${task.title}</strong>: ${task.desc} - Deadline: ${task.deadline}`;
tasksList.appendChild(li);
});
}
function openmathsPage() {
window.open('maths.html', '_blank');
}
