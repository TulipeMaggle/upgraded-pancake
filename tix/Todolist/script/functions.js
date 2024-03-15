export async function fetchserver(url) {
    const r = await fetch("https://jsonplaceholder.typicode.com/posts")
    const response = await r.json()
    console.log(response);
    response.forEach(element => {
        console.count(element);
    });
}