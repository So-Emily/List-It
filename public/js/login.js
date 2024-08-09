const userLogin = async (event) => {
  event.preventDefault();

  console.log('hi');
  const email = document.querySelector('#inputEmail').value.trim();
  const password = document.querySelector('#inputPassword').value.trim();

  console.log(email, password);

  if (email && password) {
    const response = await fetch('api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to log in.');
    }
  }

  console.log('hi');
};

document.querySelector('#login-form').addEventListener('submit', userLogin);
