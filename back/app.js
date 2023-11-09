const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.write('<h1>Hello BackEnd</h1>');
    res.end('<h2>Bye BackEnd</h2>');
});
server.listen(3065);