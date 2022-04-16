const articles = document.getElementsByTagName('article');
for (let i = 0; i < articles.length; i++) {
    const a = articles[i].getElementsByTagName('a');
    for (let j = 0; j < a.length; j++) {
        let elem = a[j];
        elem.target = '_blank';
    }
}
