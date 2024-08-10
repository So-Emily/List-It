async function fetchLists() {
    try {
        const response = await fetch('/api/lists');
        const data = await response.json();
        const lists = document.querySelector('.list');
        // render the lists here?
        lists.innerHTML = data.map(list => `<li>${list.name}</li>`).join('');
        return data;
    } catch (error) {
        console.error(error);
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
