const removeItem = async (event) => {
    // This will identify which button was clicked and save the id number of the list
    const target = event.target.dataset.id;
    // An api request will be made to delete the specific list item using the id
    const response = await fetch(`/api/lists/delete/${target}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        });
        // If the response is good then the item will be removed
        if (response.ok) {
        document.location.replace('/list-views');
        } else {
        alert(response.statusText);
        }
    };
    // When the delete button inside the card is clicked it will remove item
    document.querySelectorAll('#delete-item').forEach((button) => {
        button.addEventListener('click', removeItem);
    });