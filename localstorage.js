const storagedata = [];
const form = document.getElementById('form');
function submitt() {
  form.addEventListener('change', () => {
    const thedata = {
      name: document.getElementById('form_name').value,
      email: document.getElementById('form_email').value,
      comment: document.getElementById('form_message').value,
    };
    storagedata.unshift(thedata);
    localStorage.setItem('formdata', JSON.stringify(storagedata));
  });
}

function callData() {
  const receive = JSON.parse(localStorage.getItem('formdata'));
  document.getElementById('form_email').value = receive[0].email;
  document.getElementById('form_name').value = receive[0].name;
  document.getElementById('form_message').value = receive[0].comment;
}
form.addEventListener('submit', submitt());
window.addEventListener('DOMContentLoaded', callData());
