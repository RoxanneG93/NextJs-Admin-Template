const withSass = require("@zeit/next-sass");
const withCSS = require('@zeit/next-css');
module.exports = withSass(withCSS({
    //To enable serverless mode in Next.js, add the serverless build target in next.config.js:
    target: 'serverless'
    // webpack(config) {
    //     config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
    //     return config
    // }
}))