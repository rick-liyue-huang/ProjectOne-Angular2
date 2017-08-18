"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
app.get('/api/stock', function (req, res) {
    var result = stocks;
    var params = req.query;
    if (params.name) {
        result = result.filter(function (stock) { return stock.name.indexOf(params.name) !== -1; });
    }
    res.json(result);
});
app.get('/api/stock/:id', function (req, res) {
    res.json(stocks.find(function (stock) { return stock.id == req.params.id; }));
});
var server = app.listen(3000, 'localhost', function () {
    console.log('server starts, and address is http://localhost:3000');
});
// create the websocket server
var wsServer = new ws_1.Server({ port: 3008 });
// store the socket connection
var subscriptions = new Set();
// when create the socket, it will be added to the subscriptions set.
wsServer.on('connection', function (websocket) {
    subscriptions.add(websocket);
});
var messageCount = 0;
// each 2s, it will send to client the messageCount
setInterval(function () {
    subscriptions.forEach(function (ws) {
        if (ws.readyState == 1) {
            ws.send(JSON.stringify({ messageCount: messageCount++ }));
        }
        else {
            subscriptions.delete(ws);
        }
    });
}, 2000);
var Stock = (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
;
var stocks = [
    new Stock(1, 'the 1st one', 1.90, 3.5, 'this is the first one', ['IT', 'Elec']),
    new Stock(2, 'the 2nd one', 1.40, 4.5, 'this is the second one', ['Finance', 'Elec']),
    new Stock(3, 'the 3rd one', 1.30, 1.5, 'this is the third one', ['IT', 'Finance']),
    new Stock(4, 'the 4th one', 3.90, 3.0, 'this is the fourth one', ['IT', 'Elec']),
    new Stock(5, 'the 5th one', 2.40, 4.5, 'this is the fifth one', ['Finance', 'Elec']),
    new Stock(6, 'the 6th one', 1.70, 2.0, 'this is the sixth one', ['IT', 'Elec']),
    new Stock(7, 'the 7th one', 6.80, 3.0, 'this is the seventh one', ['IT', 'Finance']),
    new Stock(8, 'the 8th one', 8.50, 5.0, 'this is the eighth one', ['IT', 'Elec']),
];
