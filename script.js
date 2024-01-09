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
// Assuming you're using plain JavaScript

// Assuming you're using plain JavaScript
document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('.card').style.display = 'none';
    document.getElementById('pythoncourse').style.display = 'block';
});

document.getElementById('backButton').addEventListener('click', function() {
    document.querySelector('.card').style.display = 'block';
    document.getElementById('pythoncourse').style.display = 'none';
});

let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const slideCount = slides.length;

function showSlide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex = (n + slideCount) % slideCount;
  slides[slideIndex].style.display = 'block';
}

function autoSlide() {
  showSlide(slideIndex + 1);
}

let slideTimer = setInterval(autoSlide, 3000); // Auto slide every 3 seconds

function askQuestion() {
  const userInput = document.getElementById('userInput');
  const question = userInput.value;
  if (question.trim() !== '') {
    const questionsList = document.getElementById('questions');
    const newQuestion = document.createElement('li');
    newQuestion.classList.add('question');
    newQuestion.innerHTML = `
      <div><strong>Question:</strong> ${question}</div>
      <button class="solvebtn" onclick="solveQuestion(this)">Solve</button>
    `;
    questionsList.appendChild(newQuestion);
    userInput.value = '';
  }
}

function solveQuestion(button) {
  const questionText = button.previousElementSibling.textContent;
  const solution = prompt(`Provide a solution for:\n${questionText}`);
  if (solution) {
    // You can handle displaying the solution here
    alert(`Solution for:\n${questionText}\n\n${solution}`);
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const userInput = document.getElementById('userInput');
  const submitButton = document.getElementById('submitButton');

  searchBtn.addEventListener('click', function() {
    if (searchInput.value === '') {
      alert('Please fill the search field');
    }
  });

  submitButton.addEventListener('click', function() {
    if (userInput.value === '') {
      alert('Please fill the user input field');
    }
  });
});


// Get elements from the DOM
const editButton = document.getElementById('editButton');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

// Function to handle editing the profile
function editProfile() {
  const newName = prompt('Enter new name:');
  const newEmail = prompt('Enter new email:');

  if (newName && newEmail) {
    userName.textContent = newName;
    userEmail.textContent = newEmail;
    // Here you can save the updated information (e.g., send it to a server)
  }
}

// Event listener for the edit button
editButton.addEventListener('click', editProfile);

