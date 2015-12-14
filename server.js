/*
 * Square Simple Server
 * A simple express server setup for front-end framework studies, 
 * alternative to using python's simple server.
 * 
 * Build Date / Update Date: Dec 12th 2015
 */

 'use strict';

 const Assert = require('assert');
 const Path = require('path');

 const Express = require('express');
 const Logger = require('morgan');
 const Favicon = require('serve-favicon');
 const BodyParser = require('body-parser');
 const ServeStatic = require('serve-static');
 
 const Server = Express();
 
 const www = require('./server/www');
 const ErrorHandler = require('./server/errors');

 Server.use(Favicon(`${__dirname}/www/images/favicon.png`));
 Server.use(Logger('dev'));
 Server.use(BodyParser.json());
 Server.use(BodyParser.text());
 Server.use(ServeStatic(Path.join(__dirname, 'www/'), {
    dotfiles: 'deny'
 }));

 Server.use('/', www);
 Server.use(ErrorHandler.PageNotFound);
 Server.use(ErrorHandler.ServerError);

 module.exports = Server;
