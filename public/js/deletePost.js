// javascript front-end for deleting a post

async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    await fetch(`/api/post/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Cannot delete post.');
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);