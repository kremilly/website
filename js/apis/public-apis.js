const public_apis = () => {
    fetch(`https://raw.githubusercontent.com/kremilly/website/main/json/public-apis.json`).then(
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