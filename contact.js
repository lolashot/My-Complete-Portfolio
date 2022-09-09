const form = document.getElementById('form-id');
form.addEventListener('submit', (event) => {
  
  const x = document.getElementById('desktop-email').value;

  let text;
  if (x.toLowerCase() === x) {
    form.action = 'https://formspree.io/f/xeqdoedo';
    form.submit();
  } else {
    text = 'email should be in lowercase';
    document.getElementById('message').innerHTML = text;
    document.getElementById('message').style.color = 'white';
  }
});

const mobileForm = document.getElementById('mobile_id');
mobileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = document.getElementById('mobile_id');
  const x = document.getElementById('mobile_email').value;
  let text;
  if (x.toLowerCase() === x) {
    form.action = 'https://formspree.io/f/xeqdoedo';
    form.submit();
  } else {
    text = 'email should be in lowercase';
    document.getElementById('mobile_message').innerHTML = text;
    document.getElementById('mobile_message').style.color = 'white';
  }
});
