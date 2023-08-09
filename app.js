const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", function (req, res, next) {
    // const file = "index.html";
    const options = {
        root: path.join(__dirname, "src"),
    };
    const file = "index.html";
    res.sendFile(file, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log("sent:" + file);
        }
    });
});

app.get("/about", function (req, res, next) {
    // const file = "index.html";
    const options = {
        root: path.join(__dirname, "src"),
    };
    const file = "about.html";
    res.sendFile(file, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log("sent:" + file);
        }
    });
});

app.get("/contactme", function (req, res, next) {
    // const file = "index.html";
    const options = {
        root: path.join(__dirname, "src"),
    };
    const file = "contactme.html";
    res.sendFile(file, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log("sent:" + file);
        }
    });
});

app.use((req, res, next) => {
    const options = {
        root: path.join(__dirname, "src"),
    };
    const file = "error.html";
    res.status(400).sendFile(file, options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("sent:" + file);
        }
    });
});

app.listen(port);
