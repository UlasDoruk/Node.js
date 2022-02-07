const http = require("http")

const server = http.createServer((req, res) => {
    const url = req.url
    
    if(url === "/index"){
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.write("<h2>Index page</h2>")
    }else if (url === "/Aboutme"){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h2>About me!!</h2>")
    }else if(url === "/contact"){
        let url_1 = url
        url_1 =  url_1.split("/")
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(`<h2>Welcome the ${url_1} page</h2>`)
    }else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write("<h1>404 Not Found</h1>")
    }
    console.log("Bir istek gönderildi")
    res.end()
})

const port = 5000

server.listen(port, () => {
    console.log(`Portumuz ${port}`)
})