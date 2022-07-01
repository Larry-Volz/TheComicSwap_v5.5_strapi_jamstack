module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/custom',
            handler: 'article.customAction',
            config: {
                auth: false,
            }
        }
    ]
}