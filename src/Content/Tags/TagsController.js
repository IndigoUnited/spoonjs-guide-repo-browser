define([
    'spoon/Controller',
    './TagsView'
], function (Controller, TagsView) {

    'use strict';

    return Controller.extend({
        $name: 'TagsController',

        _defaultState: 'index',
        _states: {
            'index': '_indexState'
        },

        /**
         * Constructor.
         *
         * @param {Element} element The element in which the module will work on
         */
        initialize: function (element) {
            Controller.call(this);

            this._element = element;
        },

        /**
         * Index state handler.
         *
         * @param {Object} state The state parameter bag
         */
        _indexState: function (state) {
            this._destroyContent();

            this._content = this._link(new TagsView());
            this._content.appendTo(this._element);
            this._content.render();
        },

        /**
         * Destroys the current content if any.
         */
        _destroyContent: function () {
            if (this._content) {
                this._content.destroy();
                this._content = null;
            }
        }

        /**
         * {@inheritDoc}
         */
        /*_onDestroy: function () {
            // Cancel timers, ajax requests and other stuff here
            // Note that linked child views/controllers are automatically destroyed
            // when this controller is destroyed
            Controller.prototype._onDestroy.call(this);
        }*/
    });
});
