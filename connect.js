const firebase = require("firebase-admin");
const serviceAccount = require("./ginraibot-firebase-adminsdk-rwbnk-21a32b7f9e.json");
firebase.initializeApp({
    apiKey: "AIzaSyAxbQm5nrXZpSdc3vur04uBQsJ-AwqKNFk",
    authDomain: "ginraibot.firebaseapp.com",
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://ginraibot.firebaseio.com/"
});
