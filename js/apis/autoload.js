const Autoload = ( e => {
    
    let ghUsername = 'kremilly'

    let github = async () => {
        await fetch(`https://api.github.com/users/${ghUsername}`).then(
            json => json.json()
        ).then(response => {
            Kremilly.apis()
            Kremilly.pinned(response.login)

            devto(response.login)

            Image.set("#user-info-avatar", {
                url: response.avatar_url,
                alt: "Avatar of GitHub"
            })

            El.text("#user-info-bio", response.bio)
            El.text("#user-info-name", response.name)

            Attr.set("#blog-button", "href", response.blog)
            Attr.set("#user-info-blog", "href", response.blog)
            Attr.set("#user-info-github", "href", response.html_url)
            Attr.set("#pinned-repos-button", "href", response.html_url)
            Attr.set("#user-info-sponsor", "href", "https://github.com/sponsors/" + response.login)
        })
    }
    
    let devto = async (username) => {
        await fetch(`https://dev.to/api/articles?username=${username}`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xmlq=0.9,image/avif,image/webp,image/apng,*/*q=0.8,application/signed-"
            }
        }).then(
            json => json.json()
        ).then(response => {
            if (response.lenght > 0) {
                El.append("#body-articles", `
                    <div class="no-articles">No articles yet</div>
                `)

                El.hide("#blog-button")
            } else {
                let total = 0

                response.forEach(article => {
                    if (article.type_of == "article" && total < 9) {
                        let cover = ''

                        if (article.cover_image != null) {
                            cover = `<img src="${ article.cover_image }" alt="cover image for ${ article.title }"/>`
                        }
        
                        El.append("#body-articles", `
                            <a href="${ article.url }" target="_blank" class="article">
                                ${ cover }
                                <div class="title">${ article.title }</div>
                                <div class="description">${ article.description }</div>
                            </a>
                        `)
                    }

                    total += 1
                })

                El.show("#blog-button")
            }
        })
    }

    return {
        init: () => { return github() },
    }

})().init()