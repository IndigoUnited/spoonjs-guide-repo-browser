define([
    'spoon/Controller',
    './IssuesView',
    './IssueDetailsView',
    'jquery'
], function (Controller, IssuesView, IssueDetailsView, $) {

    'use strict';

    return Controller.extend({
        $name: 'IssuesController',

        _defaultState: 'index',
        _states: {
            'index': '_indexState',
            'details(nr)': '_detailsState'
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
            .then(function (issues) {
                this._content.render({
                    org: this._org,
                    repo: this._repo,
                    issues: issues
                });
            }.bind(this), function () {
                this._content.error();
            }.bind(this));
        },

        /**
         * Details state handler.
         *
         * @param {Object} state The state parameter bag
         */
        _detailsState: function (state) {
            this._destroyContent();

            this._content = this._link(new IssueDetailsView());
            this._content.appendTo(this._element);
            this._content.loading();

            // Make both details and comments requests
            $.when(
                $.get('https://api.github.com/repos/' + this._org + '/' + this._repo + '/issues/' + state.nr),
                $.get('https://api.github.com/repos/' + this._org + '/' + this._repo + '/issues/' + state.nr + '/comments')
            ).then(function (first, second) {
                this._content.render({
                    org: this._org,
                    repo: this._repo,
                    issue: first[0],
                    comments: second[0]
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
    });
});
