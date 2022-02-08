export async function createNewPost(id, title = 'new post', body = 'new post with new message') {
    const url = `${process.env.REACT_APP_API_URL}/posts/`
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId: id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return res.json()
}