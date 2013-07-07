define([
    'spoon/View',
    'jquery',
    'doT',
    'text!./assets/tmpl/issues.html',
    'css!./assets/css/issues.css'
], function (View, $, doT, tmpl) {

    'use strict';

    return View.extend({
        $name: 'IssuesListView',

        _element: 'div.issues',
        _template: doT.template(tmpl),

        /**
         * Sets the view state to loading.
         */
        loading: function () {
            this._element.empty();
            this._element.removeClass('error');
            this._element.addClass('loading');
        },

        /**
         * Sets the view state to error.
         */
        error: function () {
            this._element.html('Oops, something went wrong..');
            this._element.removeClass('loading');
            this._element.addClass('error');
        },

        /**
         * {@inheritDoc}
         */
        render: function (data) {
            this._element.removeClass('loading error');

            return View.prototype.render.call(this, data);
        }
    });
});
