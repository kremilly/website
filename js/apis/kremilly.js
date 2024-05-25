const Kremilly = ( e => {
    
    let cargoUser = 'kremilly'
    let librariesKey = '0f3a99c9b683638ea3e7295db368fa0c'

    let apiUri = 'https://api.kremilly.com';

    let apis = () => {
        Classes.add("#apisTab", "actived")
        Classes.remove("#cratesTab", "actived")

        fetch(`${apiUri}/json`).then(
            response => response.json()
        ).then(data => {
            El.empty('#body-list')

            data.list.forEach(item => {
                El.append("#body-list", `
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

    let crates = () => {
        Classes.add("#cratesTab", "actived")
        Classes.remove("#apisTab", "actived")

        fetch(`https://libraries.io/api/search?q=${cargoUser}&platforms=cargo&api_key=${librariesKey}`).then(
            response => response.json()
        ).then(data => {
            El.empty('#body-list')

            data.forEach(item => {
                El.append("#body-list", `
                    <a href="${item.package_manager_url}" target="_blank" class="api">
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
        fetch(`${apiUri}/github?user=${username}`).then(
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
        crates: () => { return crates(); },
        pinned: (username) => { return pinned(username); },
    };

})();
