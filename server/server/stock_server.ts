

import * as express from 'express';
import {Server} from "ws";
import * as path from 'path';

// run 'npm build' to create the 'dist' folder, and copy all the files under 'dist' to 'ProjectOne-Angular2/server/client' folder


const app = express();

// tell 'app' that, all the static source is in '../client' folder
app.use('/', express.static(path.join(__dirname, '..', 'client')));

app.get('/api/stock', (req, res) => {

    let result = stocks;
    let params = req.query;
    if (params.name) {
        result = result.filter(stock => stock.name.indexOf(params.name) !== -1 )
    }
    res.json(result);
});


app.get('/api/stock/:id', (req, res) => {

    res.json(stocks.find(stock => stock.id == req.params.id));

});

const server = app.listen(3000, 'localhost', () => {
    console.log('server starts, and address is http://localhost:3000');
});


// create the websocket server
const wsServer = new Server({port: 3008});

// store the socket connection
var subscriptions = new Set<any>();


// when create the socket, it will be added to the subscriptions set.
wsServer.on('connection', websocket => {
    subscriptions.add(websocket);
});

var messageCount = 0;


// each 2s, it will send to client the messageCount
setInterval(() => {
    subscriptions.forEach(ws => {

        if (ws.readyState == 1) {  // means that the socket is in the subscriptions set
            ws.send(JSON.stringify({messageCount: messageCount++}));
        } else {
            subscriptions.delete(ws);
        }
    })
}, 2000);



export class Stock {

    constructor(public id: number,
                public name: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categories: Array<string>) {
    }

};

const stocks:  Stock[] = [
    new Stock(1, 'the 1st one', 1.90, 3.5, 'this is the first one', ['IT', 'Elec']),
    new Stock(2, 'the 2nd one', 1.40, 4.5, 'this is the second one', ['Finance', 'Elec']),
    new Stock(3, 'the 3rd one', 1.30, 1.5, 'this is the third one', ['IT', 'Finance']),
    new Stock(4, 'the 4th one', 3.90, 3.0, 'this is the fourth one', ['IT', 'Elec']),
    new Stock(5, 'the 5th one', 2.40, 4.5, 'this is the fifth one', ['Finance', 'Elec']),
    new Stock(6, 'the 6th one', 1.70, 2.0, 'this is the sixth one', ['IT', 'Elec']),
    new Stock(7, 'the 7th one', 6.80, 3.0, 'this is the seventh one', ['IT', 'Finance']),
    new Stock(8, 'the 8th one', 8.50, 5.0, 'this is the eighth one', ['IT', 'Elec']),
];



















































