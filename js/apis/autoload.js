const Autoload = ( e => {
    
    let ghUsername = 'kremilly'
    let ghSponsor = 'https://github.com/sponsors/'

    let github = () => {
        fetch(`https://api.github.com/users/${ghUsername}`).then(
            json => json.json()
        ).then( response => {
            Kremilly.apis()

            devto(response.login)
            Kremilly.pinned(response.login)

            Attr.set('#blog-button', 'href', response.blog)
            Attr.set('#apis-portal', 'href', Kremilly.apiUri)
            Attr.set('#user-info-blog', 'href', response.blog)
            Attr.set('#user-info-github', 'href', response.html_url)
            Attr.set('#pinned-repos-button', 'href', response.html_url)
            Attr.set('#user-info-sponsor', 'href', `${ ghSponsor + ghUsername }`)
        })
    }
    
    let devto = (username) => {
        fetch(`https://dev.to/api/articles?username=${username}`, {
            'headers': {
                'accept': 'text/html,application/xhtml+xml,application/xmlq=0.9,image/avif,image/webp,image/apng,*/*q=0.8,application/signed-'
            }
        }).then(
            json => json.json()
        ).then(response => {
            if (response.lenght > 0) {
                El.append('#body-articles', `
                    <div class='no-articles'>No articles yet</div>
                `)

                El.hide('#blog-button')
            } else {
                let total = 0

                response.forEach(article => {
                    if (article.type_of == 'article' && total < 9) {
                        let cover = ''

                        if (article.cover_image != null) {
                            cover = `<img src='${ article.cover_image }' alt='cover image for ${ article.title }'/>`
                        }
        
                        El.append('#body-articles', `
                            <a href='${ article.url }' target='_blank' class='article'>
                                ${ cover }
                                <div class='title'>${ article.title }</div>
                                <div class='description'>${ article.description }</div>
                            </a>
                        `)
                    }

                    total += 1
                })

                El.show('#blog-button')
            }
        })
    }

    return {
        init: () => { return github() },
    }

})().init()

window.onload = e => {

    document.getElementById('apisTab').addEventListener('click', Kremilly.apis);
    document.getElementById('cratesTab').addEventListener('click', Kremilly.crates);
    
};
