define([
    'spoon/Controller',
    './IssuesView',
    'jquery'
], function (Controller, IssuesView, $) {

    'use strict';

    return Controller.extend({
        $name: 'IssuesController',

        _defaultState: 'index',
        _states: {
            'index': '_indexState'
        },

        /**
         * Constructor.
         *
         * @param {Element} element The element in which the module will work on
         * @param {String}  org     The GitHub org
         * @param {String}  repo    The GitHub repo
         */
        initialize: function (element, org, repo) {
            Controller.call(this);

            this._element = element;
            this._org = org;
            this._repo = repo;
        },

        /**
         * Index state handler.
         *
         * @param {Object} state The state parameter bag
         */
        _indexState: function (state) {
            this._destroyContent();

            this._content = this._link(new IssuesView());
            this._content.appendTo(this._element);
            this._content.loading();

            $.get('https://api.github.com/repos/' + this._org + '/' + this._repo + '/issues')
            .then(function (data) {
                this._content.render({
                    org: this._org,
                    repo: this._repo,
                    issues: data
                });
            }.bind(this), function () {
                this._content.error();
            }.bind(this));
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
