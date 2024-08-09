const registerUser = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#inputName').value.trim();
  const email = document.querySelector('#inputEmail').value.trim();
  const password = document.querySelector('#inputPassword').value.trim();

  console.log(name, email, password);

  if (name && email && password) {
    const response = await fetch('api/users/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to register.');
    }
  }
};

document
  .querySelector('#register-form')
  .addEventListener('submit', registerUser);
