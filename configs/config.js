module.exports = {
    APP_NAME: "samuel",
    APP_ID: process.env.APP_ID || 'tree-tracking',
    MASTER_KEY: process.env.MASTER_KEY || 'fellowship',
    SERVER_URL: process.env.SERVER_URL || 'https://tree-track.herokuapp.com/parse',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://heroku_ckcqrx5p:sqbb00rmj6u2ikf9mmuevh99ri@ds227119.mlab.com:27119/heroku_ckcqrx5p',
    DASHBOARD_USER: process.env.DASHBOARD_USER || "samuel",
    DASHBOARD_PASS: process.env.DASHBOARD_PASS || "father200",
}
