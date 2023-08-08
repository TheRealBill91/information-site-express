const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = "3000";

http
    .createServer((req, res) => {
        if (req.url === "/") {
            const file = "src/index.html";
            getFile(file, res);
        } else if (req.url === "/about") {
            const file = "src/about.html";
            getFile(file, res);
        } else if (req.url === "/contactme") {
            const file = "src/contactme.html";
            getFile(file, res);
        } else {
            fs.readFile("src/error.html", (err, data) => {
                if (err) {
                    console.error("there is error:" + err);
                    return;
                }
                res.writeHead(404, {
                    "Content-Type": "text/html",
                    "Content-Length": data.length,
                });
                res.write(data);
                res.end();
            });
        }
    })
    .listen(port);

const getFile = (file, res) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            console.error("there is error:" + err);
            return;
        }
        res.writeHead(200, {
            "Content-Type": "text/html",
            "Content-Length": data.length,
        });
        res.write(data);
        res.end();
    });
};
