const http = require('http');
const PORT = 8000;

const server = http.createServer((req, res) => {
    console.log('hello')
});

 

server.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});
