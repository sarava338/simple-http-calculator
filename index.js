const http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' })

    const url = new URL('http://localhost:8000' + req.url)

    var q = url.search.split('&').map(e => e.split('=')).map(e => e[1])

    switch (q[0]) {
        case 'add':
            res.end("Addition is: " + (Number(q[1]) + Number(q[2])))
            break
        case 'subtract':
            res.end("Subtraction is " + (Number(q[1]) - Number(q[2])))
            break
        case 'multiple':
            res.end("Multiplication is: " + (Number(q[1]) * Number(q[2])))
            break
        case 'divide':
            res.end("Division is: " + (Number(q[1]) / Number(q[2])))
            break
    }

}).listen(8000)
