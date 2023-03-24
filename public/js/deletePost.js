// javascript front-end for deleting a post

const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

async function deleteFormHandler(event) {
    event.preventDefault();

    await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert('Cannot delete post.');
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);