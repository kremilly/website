const public_apis = () => {
    fetch(`https://api.kremilly.com/json`).then(
        response => response.json()
    ).then(data => {
        data.list.forEach(item => {
            El.append("#body-public-apis", `
                <a href="${item.wiki}" target="_blank" class="api">
                    ${_.capitalize(item.name)}
                    <div class="fas fa-external-link"></div>
                </a>
            `);
        });
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
};

public_apis();
