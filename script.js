const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from being submitted

  // get the username and password values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // validate the form input
  if (username === '' || password === '') {
    alert('Please enter a username and password');
    return;
  }

  // check if the username and password are correct
  if (username === 'admin' && password === 'password') {
    alert('Login successful');
  } else {
    alert('Invalid username or password');
  }
});
