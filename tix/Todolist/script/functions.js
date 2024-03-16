/**
 * 
 * @param {string} tagName 
 */
export function createElement(tagName, text) {
    const article = document.createElement(tagName)
    article.innertext = text
    return article
} 