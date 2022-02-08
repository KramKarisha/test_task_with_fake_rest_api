export async function createNewComment(postId, name, email, body = "New Comment") {
    const url = `${process.env.REACT_APP_API_URL}/posts/${postId}/comments`
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            postId,
            name,
            email,
            body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return response.json();
}
