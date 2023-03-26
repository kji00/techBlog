// javascript front-end for posting comments

async function commentFormHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();

    if (comment) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to post comment.');
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);