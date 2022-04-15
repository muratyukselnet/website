const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
    [],
    {
        images: {
            loader: 'imgix',
            path: '',
        }
    }
);
