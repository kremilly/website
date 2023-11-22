const devto = () => {
    fetch(`https://dev.to/api/articles?username=kremilly`, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-"
        }
    }).then(
        json => json.json()
    ).then(response => {
        if (response == "") {
            El.append("#body-articles", `
                <div class="no-articles">No articles yet</div>
            `);

            El.hide("#blog-button");
        } else {
            let total = 0;

            response.forEach(article => {
                if (article.type_of == "article" && total < 9) {
                    let cover = '';

                    if (article.cover_image != null) {
                        cover = `<img src="${ article.cover_image }" alt="cover image for ${ article.title }"/>`
                    }
    
                    El.append("#body-articles", `
                        <a href="${ article.url }" class="article">
                            ${ cover }
                            <div class="title">${ article.title }</div>
                            <div class="description">${ article.description }</div>
                        </a>
                    `)
                }

                total += 1;
            });

            El.show("#blog-button");
        }
    })
};

devto();