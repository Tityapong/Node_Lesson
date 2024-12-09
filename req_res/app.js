const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {
    console.log(req.url)
    console.log(req.method)

    res.setHeader('Content-Type', 'text/html') // json // plaintext
    // res.write('<h1>hello world</h1>')
    // res.end()
    // fs.readFile('./views/home.html' , (err , data) => {
    //     if(err){
    //         console.log(err)
    //         res.end()
    //     }
    //     res.write(data)
    //     res.end()

    // })


    switch(req.url){
        case '/':
            fs.readFile('./views/home.html' , (err , data) => {
                if(err){
                    console.log(err)
                    res.end()
                }
                res.write(data)
                res.end()
            })
            break;
        case '/about':
            fs.readFile('./views/about.html' , (err , data) => {
                if(err){
                    console.log(err)
                    res.end()
                }
                res.write(data)
                res.end()
            })
            break;
        case '/contact_us':
            fs.readFile('./views/contact.html' , (err , data) => {
                if(err){
                    console.log(err)
                    res.end()
                }
                res.write(data)
                res.end()
            })
            break;
            default:
            fs.readFile('./views/404.html' , (err , data) => {
                if(err){
                    console.log(err)
                    res.end()
                }
                res.write(data)
                res.end()
            })


    }

    

})

server.listen(8000 , () => {
    console.log('server is listening on port 8000')
})
