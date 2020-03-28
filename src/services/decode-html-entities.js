/*
* Copied from:
* https://stackoverflow.com/questions/5796718/html-entity-decode
*/

const decodeHTMLEntities = (str) => {
    const element = document.createElement('div');

    if (str && typeof str === 'string') {
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
    }

    return str;
}

export default decodeHTMLEntities