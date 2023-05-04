import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

onReloadPage();

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onReloadPage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    input.value = savedData.email;
    textArea.value = savedData.message;
  }
}
