const http =  require('http');
const port =  8080;

const requestListener = function(req,res)
{res.writeHead(200);
    res.end(toString (port));
}

const server = http.createServer(requestListener);
server.listen(port);