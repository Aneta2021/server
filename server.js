const http =  require('http');
const port = process.env.port || 1000;

const requestListener = function(req,res)
{res.writeHead(200);
    res.end('KOCHAM POZNAN');
}

const server = http.createServer(requestListener);
server.listen(port);