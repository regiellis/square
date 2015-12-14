/*
 * Square Simple Server
 * A simple express server setup for front-end framework studies, 
 * alternative to using python's simple server.
 * 
 * Build Date / Update Date: Dec 12th 2015
 */

 'use strict';

 const WWW = require('express').Router();
 
 WWW.get('/', (request, response) => {
    return response.send('./www/index.html');
 });

 WWW.get('/api/status', (request, response) => {
    return response.json({
        status: 200,
        message: 'Square has started successfully...'
    });
 });

 module.exports = WWW;
