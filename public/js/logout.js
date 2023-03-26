// javascript front-end for logging-out

const logoutHandler = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
        alert('Successfully logged out.')
    } else {
        alert('Something went wrong')
    }
};

document.querySelector('#logout').addEventListener('click', logoutHandler);