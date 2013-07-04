define([
    'spoon/Controller',
    './ApplicationView',
    './HomeView',
    '../Content/ContentController'
], function (Controller, ApplicationView, HomeView, ContentController) {

    'use strict';

    return Controller.extend({
        $name: 'ApplicationController',

        _defaultState: 'home',
        _states: {
            'home': '_homeState',
            'inner(org, repo)': '_innerState'
        },

        /**
         * Constructor.
         */
        initialize: function () {
            Controller.call(this);

            // Instantiate and render the application view
            this._view = this._link(new ApplicationView());
            this._view.appendTo(document.body);
            this._view.render();
        },

        /**
         * Home state handler.
         *
         * @param {Object} state The state parameter bag
         */
        _homeState: function (state) {
            this._destroyContent();

            this._content = this._link(new HomeView());
            this._content.appendTo('#content');
            this._content.render();

            this._content.on('go', function (target) {
                this.setState('inner', { org: target.org, repo: target.repo });
            }.bind(this));
        },

        /**
         * Inner state handler.
         *
         * @param {Object} state The state parameter bag
         */
        _innerState: function (state) {
            this._destroyContent();

            this._content = this._link(new ContentController('#content', state.org, state.repo));
            this._content.delegateState(state);
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
    });
});
