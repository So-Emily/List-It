// This file contains the JavaScript code for the lists page
// This code is responsible for fetching and rendering lists
// and handling the form submission to add a new list item

// renderLists function is responsible for rendering all lists
async function renderLists(lists) {
    const listsContainer = document.getElementById('lists-container');
    listsContainer.innerHTML = '';

    lists.forEach(list => {
        const listElement = document.createElement('div');
        listElement.className = 'list';
        listElement.innerHTML = `
            <h2>${list.title}</h2>
            <p>${list.description}</p>
        `;
        listsContainer.appendChild(listElement);
    });
}

// renderList function is responsible for rendering a single list
async function renderList(list) {
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';

    const listElement = document.createElement('div');
    listElement.className = 'list';
    listElement.innerHTML = `
        <h2>${list.title}</h2>
        <p>${list.description}</p>
        <ul>
            ${list.items.map(item => `<li>${item.name}</li>`).join('')}
        </ul>
    `;
    listContainer.appendChild(listElement);
}

// fetchLists function is responsible for fetching all lists
async function fetchLists() {
    try {
        const response = await fetch('/lists');

        if (!response.ok) {
            throw new Error('Failed to fetch lists');
        }

        const lists = await response.json();
        renderLists(lists);
    } catch (error) {
        console.error(error);
    }
}

// updateList function is responsible for updating the list
async function updateListItem(listId, itemId) {
    try {
        const response = await fetch(`/list/update/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ listId }),
        });

        if (!response.ok) {
            throw new Error('Failed to update list item');
        }
    } catch (error) {
        console.error(error);
    }
}

// Event listener for the form submission to add a new list item
// This event listener is added when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('item-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const itemName = document.getElementById('item-name').value;
        const itemDescription = document.getElementById('task-description').value;
        const itemStartDate = document.getElementById('item-start-date').value;

        const response = await fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: itemName,
                description: itemDescription,
                startDate: itemStartDate,
            }),
        });

        if (response.ok) {
            // Close the modal and refresh the list
            const modal = bootstrap.Modal.getInstance(document.getElementById('formModal'));
            modal.hide();
            fetchLists();
        } else {
            console.error('Failed to add item');
        }
    });
});