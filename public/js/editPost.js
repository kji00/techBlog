// javascript front-end for editing a previous post
const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-text"]').value;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert('Post could not be edited.');
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);