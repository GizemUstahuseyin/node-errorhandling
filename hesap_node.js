const https = require('http');
const url = require('url');
const fs = require('fs');

function sayiBol(bolen,bolunen)
{
    if(bolen == 0)
    {
        throw new Error ("Sifira bolemezsin");
    }
    return bolunen/bolen;
}

const server=http.createServer((req,res)=>
    {
    const pathname = url.parse(req.url, true);

    if(req,method === 'GET' && pathname === '/')
    {
        fs.readFile('./hesap.html',(err,data) =>
        {
        if(err)
        {
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('Server tarafında bir hata oluştu');
        }
        else
        {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end();
        }

        
    })
}
        else if(req.method === 'POST' && pathname === '/bol')
        {
            let body = '';
            req.on('data', (chunk) => 
            {
                body += chunk.toString()
            });

            req.on('end',() =>
            {
                const {bolunen,bolen} = JSON.parse(body);
                try
                {
                    const sonuc =sayiBol(parseFloat(bolen))
                }
                catch
                {

                }
            })
            
        }
})