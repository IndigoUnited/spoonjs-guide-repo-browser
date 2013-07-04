define([
    'spoon/View',
    'jquery',
    'handlebars',
    'text!./assets/tmpl/app.html',
    'css!./assets/css/app.css',
    'css!bootstrap/css/bootstrap.css'
], function (View, $, Handlebars, tmpl) {

    'use strict';

    return View.extend({
        $name: 'ApplicationView',

        _element: 'div#app',
        _template: Handlebars.compile(tmpl)
    });
});
