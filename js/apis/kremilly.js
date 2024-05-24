const Kremilly = ( e => {
    
    let apiUri = 'https://api.kremilly.com/';

    let apis = () => {
        fetch(`${apiUri}json`).then(
            response => response.json()
        ).then(data => {
            data.list.forEach(item => {
                El.append("#body-public-apis", `
                    <a href="${item.wiki}" target="_blank" class="api">
                        ${_.capitalize(item.name)}
                        <div class="fas fa-external-link"></div>
                    </a>
                `)
            })
        }).catch(error => {
            console.error('Error fetching data:', error)
        })
    }

    let pinned = (username) => {
        fetch(`${apiUri}github?user=${username}`).then(
            json => json.json()
        ).then(response => {
            response.forEach(item => {
                El.append("#pinned-repos", `
                    <div class="project" onclick="window.open('${item.url}', '_blank');">
                        <div class="name">
                            ${ item.name }
                            
                            <div class="stats">
                                <a class="stars">
                                    ${ Numbers.format(item.stars) }
                                    <div class="fas fa-star"></div>
                                </a>
                                
                                <a class="forks">
                                    ${ Numbers.format(item.forks) }
                                    <div class="fas fa-code-fork"></div>
                                </a>
                            </div>
                        </div>
                        <div class="description">${ item.description }</div>
                        <div class="languages">
                            ${Array.isArray(item.languages) ? item.languages.map(lang => `<div class='lang'>${lang}</div>`).join('') : ''}
                        </div>
                    </div>
                `)
            })
        })
    }

    return {
        apiUri: apiUri,

        apis: () => { return apis(); },
        pinned: (username) => { return pinned(username); },
    };

})();
