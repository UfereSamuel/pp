module.exports = {
    APP_NAME: "samuel",
    APP_ID: process.env.APP_ID || 'tree-tracking',
    MASTER_KEY: process.env.MASTER_KEY || 'fellowship',
    SERVER_URL: process.env.SERVER_URL || 'https://tree-trackers.herokuapp.com/parse',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://heroku_p682jq5p:ra9n74deo1n36faeee66qlrtpu@ds135234.mlab.com:35234/heroku_p682jq5p',
    DASHBOARD_USER: process.env.DASHBOARD_USER || "samuel",
    DASHBOARD_PASS: process.env.DASHBOARD_PASS || "father200",
}
