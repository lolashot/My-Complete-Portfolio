// const btn = document.getElementById('desktop-submit-btn');
const form = document.getElementById('form-id');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const x = document.getElementById('desktop-email').value;
  let text;
  if (x.toUpperCase() === x) {
    text = 'email should be in lowercase';
    document.getElementById('message').innerHTML = text;
  } else {
    form.action = 'https://formspree.io/f/xeqdoedo';
    form.submit();
  }
});

const mobileForm = document.getElementById('mobile_id');
mobileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = document.getElementById('mobile_id');
  const x = document.getElementById('mobile_email').value;
  let text;
  if (x.toUpperCase() === x) {
    text = 'email should be in lowercase';
    document.getElementById('mobile_message').innerHTML = text;
  } else {
    form.action = 'https://formspree.io/f/xeqdoedo';
    form.submit();
  }
});