function createArticle(post) {
    const article = document.createElement("div")
    const h1 = document.createElement("h1")
    h1.innerText = post.title
    article.append(h1)
    return article
}

function createElementAvectext(tagName, text) {
    const element = document.createElement(tagName)
    element.innertext = text
    return element
}

async function main() {
    const conteneur = document.querySelector("#article")
    console.log(conteneur);
    try {
        const r = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
            headers: {
                Accept: "application/json",
            },
        });
        if (r.ok !== true) {
            throw new Error("y'a un problème");
        }

        const response = await r.json()
        console.log(response);
        for (let post of response) {
            console.log(conteneur.append(createArticle(post)));
            conteneur.append(createArticle(post))
        }

    } catch (error) {
        console.log(error);
    }



}
main()