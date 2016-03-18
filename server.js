"use strict";

const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

app.route("/")
    .get(function(req, res) {
        res.json(req.headers);
    });
    
app.listen(app.get("port"), function() {
    console.log(`The app is listening on port ${app.get("port")}`);
})