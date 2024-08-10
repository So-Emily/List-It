// public/js/logout.js

const logOut = async () => {
    console.log('Attempting to log out...');
    
    const response = await fetch('api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        console.log('Logout successful');
        document.location.replace('/');
    } else {
        console.error('Logout failed', response);
        alert('Failed to log out.');
    }
};

document.querySelector('#logout').addEventListener('click', logOut);