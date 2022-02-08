export async function getLastUser() {
    const url = `${process.env.REACT_APP_API_URL}/users/`;
    const res = await fetch(url);
    const users = await res.json();
    return users[users.length - 1];
}