// This function will handle the creation of a new comment
const listFormData = async (event) => {
  event.preventDefault();
  //This will get the user input values
  const title = document.querySelector('#list-title').value.trim();
  const description = document.querySelector('#list-desc').value.trim();

  console.log(title, description);

  // If the description is not empty then it will make an api request to create
  // a post
  if (title && description) {
    const response = await fetch('api/lists/add', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });
    // If the api request is succesful then it will redirect to the user dashboard page

    if (response.ok) {
      const test = response.json();
      console.log('Success', test);
    } else {
      // If it fails then a error message will show
      alert(response.statusText);
    }
  }
};
// This event listener is waiting for when the form is submitted
document
  .querySelector('.new-list-form')
  .addEventListener('submit', listFormData);
