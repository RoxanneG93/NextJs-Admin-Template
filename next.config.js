const withSass = require("@zeit/next-sass");
const withCSS = require('@zeit/next-css');
module.exports = withSass(withCSS({
    // webpack(config) {
    //     config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
    //     return config
    // }
}))