/*const withImageLoader = require('next-image-loader')*/
module.exports = {
    trailingSlash: true,
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        domains: ['torrel.eth', "storageapi.fleek.co"],
        loader: "imgix",
        path: "https://noop/",
    },
}