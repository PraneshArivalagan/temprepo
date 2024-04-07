const http = require('http');
const server= http.createServer((req, res)=>{
    //console.log(req)
    if(req.url === '/'){
        res.end('welcome to the home page');
        // return;
    }
    if(req.url === '/about'){
        res.end('here is our short history');
        // return;
    }
    res.end(`
        <h1> Oops </h1>
        <p>can't seem to find the page you're looking for </p>
        <a href="/">back to home </a>
    `);
})
server.listen(5000);
