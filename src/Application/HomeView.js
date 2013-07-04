define([
    'spoon/View',
    'jquery',
    'handlebars',
    'text!./assets/tmpl/home.html',
    'css!./assets/css/home.css'
], function (View, $, Handlebars, tmpl) {

    'use strict';

    return View.extend({
        $name: 'HomeView',

        _element: 'div.home',
        _template: Handlebars.compile(tmpl),
        _events: {
            'click .btn': '_onBtnClick',
            'focus .input-append': function (e, el) {
                el.removeClass('error');
            }
        },

        _onBtnClick: function (e, el) {
            var value,
                matches;

            console.log('User clicked go!');

            value = this._element.find('input').val();
            matches = value.match(/^git:\/\/github\.com\/(\S+?)\/(\S+?)(?:\.git)$/);

            if (matches) {
                this._upcast('go', { org: matches[1], repo: matches[2] });
            } else {
                console.log(el.closest('.input-append'));
                el.closest('.input-append').addClass('error');
            }
        }
    });
});
