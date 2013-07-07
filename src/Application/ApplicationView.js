define([
    'spoon/View',
    'jquery',
    'doT',
    'text!./assets/tmpl/app.html',
    'css!./assets/css/app.css',
    'css!bootstrap/css/bootstrap.css'
], function (View, $, doT, tmpl) {

    'use strict';

    return View.extend({
        $name: 'ApplicationView',

        _element: 'div#app',
        _template: doT.template(tmpl)
    });
});
