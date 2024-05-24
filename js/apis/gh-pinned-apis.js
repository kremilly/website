async function gh_pinned_api() {
    await fetch(`https://api.kremilly.com/github?user=kremilly`).then(
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
            `);
        });
    })
};

gh_pinned_api();