'use strict';

const express = require('express');
const app = express();
app.listen(4494);
const server = app.listen(() => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});


const getEmoticon = require("./kaomoji.js");

let div = document.getElementById("mainDiv");
let emotion = document.createElement("p");
emotion.innerText = getEmoticon();
div.appendChild(emotion);