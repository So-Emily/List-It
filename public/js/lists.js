async function fetchListById(listId) {
    try {
        const response = await fetch(`/api/lists/${listId}`);
        if (!response.ok) {
            throw new Error('No list found with this id');
        }
        const data = await response.json();
        // Render the list data on the page
        renderList(data);
    } catch (error) {
        console.error(error);
        // Handle the error, e.g., display a message to the user
    }
}

document.addEventListener('DOMContentLoaded', fetchLists);

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const element = document.getElementById(data);
    ev.target.appendChild(element);

    // Update the backend with the new state
    const listId = ev.target.id;
    const itemId = element.id;
    updateListItem(listId, itemId);
}

async function fetchLists() {
    try {
        const response = await fetch('/api/lists');
        if (!response.ok) {
            throw new Error('Failed to fetch lists');
        }
        const data = await response.json();
        // Render the lists on the page
        renderLists(data);
    } catch (error) {
        console.error(error);
    }
}

async function renderLists(lists) {
    // Render the lists on the page
}

async function renderList(list) {
    // Render the list on the page
}

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
