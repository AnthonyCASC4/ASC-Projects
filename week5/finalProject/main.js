// https://quotes.rest/quote/authors

function getAuthors() {
    $.ajax({
        url: 'http://quotes.rest/quote/search.json?author=drake',
        headers: {
            "Accept": "application/json",
            "X-TheySaidSo-Api-Secret": "k8wwgo2yWZveJAtbZg_QXAeF"
        }, success: function (data) {
            console.log(data);
        }
    });
}

