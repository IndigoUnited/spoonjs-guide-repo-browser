define([
    'spoon/Controller',
    './ContentView',
    './Code/CodeController',
    './Issues/IssuesController',
    './Tags/TagsController',
    './History/HistoryController'
], function (Controller, ContentView, CodeController, IssuesController, TagsController, HistoryController) {

    'use strict';

    return Controller.extend({
        $name: 'ContentController',

        _defaultState: 'code',
        _states: {
            'code': '_codeState',
            'issues': '_issuesState',
            'tags': '_tagsState',
            'history': '_historyState'
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

            this._org = org;
            this._repo = repo;

            this._view = this._link(new ContentView());
            this._view.appendTo(element);

            this.once('link', function () {
                this._view.render();
                this._rightElement = this._view.getContentElement();
            }.bind(this));
        },

        /**
         * Code state handler.
         *
         * @param {Object} state The state parameter bag
         */
        _codeState: function (state) {
            this._view.selectMenu('code');
            this._destroyContent();

            this._content = this._link(new CodeController(this._rightElement, this._org, this._repo));
            this._content.delegateState(state);
        },

        /**
         * Issues state handler.
         *
         * @param {Object} state The state parameter bag
         */
        _issuesState: function (state) {
            this._view.selectMenu('issues');
            this._destroyContent();

            this._content = this._link(new IssuesController(this._rightElement, this._org, this._repo));
            this._content.delegateState(state);
        },

        /**
         * Tags state handler.
         *
         * @param {Object} state The state parameter bag
         */
        _tagsState: function (state) {
            this._view.selectMenu('tags');
            this._destroyContent();

            this._content = this._link(new TagsController(this._rightElement, this._org, this._repo));
            this._content.delegateState(state);
        },

        /**
         * History state handler.
         *
         * @param {Object} state The state parameter bag
         */
        _historyState: function (state) {
            this._view.selectMenu('history');
            this._destroyContent();

            this._content = this._link(new HistoryController(this._rightElement, this._org, this._repo));
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
