### ProjectOneAngular2

#### Project Introduction

In this project I use Angular2 to create one 'Stock Management' web signle page app, which composes the router, DI,Rxjs, data binding and other angular2 skills. I get data from the server end created by express.js, and use http server and websocket server to provide the components data. In the end, by typing 'npm build' to create the production environment codes in directory of '/dist/'. and run them in the server environment.

#### Project Run

The whole project named 'ProjectOne-Angular2', is created by 'angular-cli', and the project includes '/server' and '/client'
directories, which are created by express.js and angular, respectively. In order to run the project in development environment, firstly to type `node build/stock_server.js` under '/ProjectOne-Angular2/server/' directory, and then type `npm start` under 'ProjectOne-Angular2/client' directory, the app will run at at address 'http://localhost:4200'. If run the project need to firstly type `npm build` under 'ProjectOne-Angular2/client' directory, and produce the directory of '/dist', and copy the files of '/dist' to '/ProjectOne-Angular2/server/client/' directory, and just type `node build/stock_server.js`, the app will run directly in address 'http://localhost:3000'.



#### Important!!! Read More?
More thing about this project is written in 'docs/about.md'.
