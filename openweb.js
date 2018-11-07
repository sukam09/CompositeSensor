var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request,response){
  var parsedUrl = url.parse(request.url);
  var resource = parsedUrl.pathname;

  if(resource == '/sktelesys'){
    fs.readFile('sktelesys2.html', 'utf-8', function(error, data)
    {
      if(error){
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('500 Internal Server Error : '+error);
      }else{
          response.writeHead(200, {'Content-Type':'text/html'});
          response.end(data);
      }
    });
  }
  else if(resource == '/log'){
    fs.readFile('log.html', 'utf-8', function(error, data)
    {
      if(error){
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('500 Internal Server Error : '+error);
      }else{
          response.writeHead(200, {'Content-Type':'text/html'});
          response.end(data);
      }
    });
  }  
  else if(resource == '/report'){
    fs.readFile('report.html', 'utf-8', function(error, data)
    {
      if(error){
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('500 Internal Server Error : '+error);
      }else{
          response.writeHead(200, {'Content-Type':'text/html'});
          response.end(data);
      }
    });
  }
  else{
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('404 Page Not Found');
  }
});

server.listen(80, function(){
  console.log('Server is running…');
});