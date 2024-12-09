const http = require('http');
const fs = require('fs');
const PORT = 8000;
const server = http.createServer((req, res) => {
   
    // res.setHeader('Content-Type', 'text/html')
    // console.log(req.method)
    // res.end('hello world')
    let path = './'
    if(req.url == '/'){
        path += 'index.html'
    } else if (req.url == '/about'){
        path += 'about.html'
    } else if (req.url == '/contact_us'){
        path += 'contact.html'
    } else if (req.url == '/getme'){
        path += 'profile.html'
    } else if (req.url == '/show_more'){
        path += 'detail.html'
    }else{
        path += '404.html'
    }
 

fs.readFile(path , (err , data) => {
    if(err){
        console.log(err)
        res.end()
    }
    res.end(data)

})

    


});

server.listen(PORT, () => {
    console.log('Server is listening on port 8000');
});