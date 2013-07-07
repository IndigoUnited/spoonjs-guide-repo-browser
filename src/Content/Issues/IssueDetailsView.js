define([
    'spoon/View',
    'jquery',
    'doT',
    'text!./assets/tmpl/issue_details.html',
    'css!./assets/css/issue_details.css'
], function (View, $, doT, tmpl) {

    'use strict';

    return View.extend({
        $name: 'IssueDetailsView',

        _element: 'div.issue-details',
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
