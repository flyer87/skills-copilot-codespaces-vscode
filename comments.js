// create web server    
// 1. load modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
// 2. create server
http.createServer(function (request, response) {
    // 2.1 get url
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    // 2.2 get method
    if (pathname == '/comment') {
        // 2.2.1 get method
        var method = request.method;
        console.log(method);
        if (method == 'GET') {
            //