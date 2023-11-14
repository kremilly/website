const github = () => {
    fetch(`https://api.github.com/users/Kremilly`).then(
        json => json.json()
    ).then(response => {
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
        Attr.set("#user-info-twitter", "href", "https://twitter.com/" + response.twitter_username)
    });
};

github();