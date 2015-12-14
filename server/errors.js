/*
 * Square Simple Server
 * A simple express server setup for front-end framework studies, 
 * alternative to using python's simple server.
 * 
 * Build Date / Update Date: Dec 12th 2015
 */
 
 'use strict';

 function PageNotFound (request, response, next) {
    let error = new Error('Page Not Found');
        response.status(404);
        console.log(response);
        response.json({
            message: error.message,
            status: response.statusCode
        })
        next();
 }

 function ServerError (error, request, response, done) {
    response.status(error.status || 500);
    response.json({
        message: error.message,
        status: response.statusCode,
        error: (process.env.NODE_ENV === 'production')
        ? {}
        : error.stack
    });
    return done(error)
 }

 exports.PageNotFound = PageNotFound;
 exports.ServerError = ServerError;
