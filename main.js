'use strict';

var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
// var http = require('http');
// var path = require('path');
// var fs = require('fs');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1400, height: 900});

  // var server = http.createServer(requestHandler).listen(9527);

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/client/index.html');
  // mainWindow.webContents.on('did-finish-load', function() {
  //   mainWindow.setTitle(app.getName());
  // });

  // Open the DevTools.
  mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    //server.close();
  });
});

// function requestHandler(req, res) {
//   var file = req.url == '/' ? 'index.html' : req.url,
//       root = __dirname + '/client/';
//   console.dir(file);
//   console.dir(root);
//   getFile((root + file), res, '404');
// }
//
// function getFile(filePath, res, page404) {
//   fs.exists(filePath, function(exists) {
//     if(exists) {
//       fs.readFile(filePath, function(err, contents) {
//         if(!err) {
//           res.end(contents);
//         } else {
//           console.dir(err);
//         }
//       });
//     } else {
//       res.writeHead(404, {'Content-type': 'text/html'});
//       res.end(page404);
//     }
//   });
// }
