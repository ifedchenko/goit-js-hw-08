import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea');
const inputEmail = document.querySelector('.feedback-form input');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

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
    inputEmail.value = savedData.email !== undefined ? savedData.email : '';
    textArea.value = savedData.message !== undefined ? savedData.message : '';
  }
}
