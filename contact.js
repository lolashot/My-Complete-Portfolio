function submitForm(event) {
    event.preventDefault();
const form = document.getElementById('form-id');
const x = document.getElementById('desktop-email').value;

  let text;
  if (x.toUpperCase() === x) {
    text = "email should be in lowercase";
    document.getElementById("message").innerHTML = text;
    document.getElementById("message").style.color = 'white';

  } 
  else {
    form.action = "https://formspree.io/f/xeqdoedo";
    form.submit();
  
  }

}


function mobileSubmitForm(event) {
    event.preventDefault();

const form = document.getElementById('mobile_id');
const x = document.getElementById('mobile_email').value;

  let text;
  if (x.toUpperCase() === x) {
    text = "email should be in lowercase";
    
    document.getElementById("mobile_message").innerHTML = text;
    document.getElementById("mobile_message").style.color = 'white';

  } 
  else {
    form.action = "https://formspree.io/f/xeqdoedo";
    form.submit();
  
  }

}