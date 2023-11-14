const public_apis = () => {
    let link = ''
    if (window.location.host == 'localhost' || window.location.host == '127.0.0.1') { 
        link = window.location.origin + '/' + window.location.pathname.split('/')[1] + '/' 
    } else {
        link = window.location.origin + '/'
    }

    fetch(`${ link }json/public-apis.json`).then(
        json => json.json()
    ).then(response => {
        response.forEach(item => {
            El.append("#body-public-apis", `
                <a href="${ item.url }" target="_blank" class="api">
                    ${ item.name }
                    <div class="fas fa-external-link"></div>
                </a>
            `)
        });
    })
};

public_apis();