var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    //var queryData = url.toUpperCase(_url,true).query;
    console.log(queryData.id);//queryData를 찍어보면 id라는 객체가 찍힌다. 따라서 queryData.id를 해주면 id객체의 값을 추출할 수 있다. 
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(querydata.id);
    console.log(__dirname + url);
    //response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);
