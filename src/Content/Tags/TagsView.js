define([
    'spoon/View',
    'jquery',
    'handlebars',
    'text!./assets/tmpl/tags.html',
    'css!./assets/css/tags.css'
], function (View, $, Handlebars, tmpl) {

    'use strict';

    return View.extend({
        $name: 'TagsView',

        _element: 'div.tags',
        _template: Handlebars.compile(tmpl)
        /*_events: {
            'click .btn': '_onBtnClick'
        },*/

        /**
         * {@inheritDoc}
         */
        /*render: function (data) {
            // By default, the render function already
            // renders the _template with the passed data
            View.prototype.render.call(this, data);

            // Do other things here

            return this;
        },*/

        /**
         * Handles the button click event.
         *
         * @param {Event} event The event
         */
        /*_onBtnClick: function (event) {
            this._upcast('btn-click');
        },*/

        /**
         * {@inheritDoc}
         */
        /*_onDestroy: function () {
            // Cancel timers and other stuff here
            // Note that linked child views/controllers are automatically destroyed
            // when this view is destroyed
            // The view element is also destroyed, clearing all the events and other stuff
            // from its element and its descendants
            View.prototype._onDestroy.call(this);
        }*/
    });
});
