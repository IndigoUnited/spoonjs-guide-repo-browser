define(function () {

    'use strict';

    return {
        home: '/',
        inner: {
            $pattern: '/{org}/{repo}',
            code: '/',
            issues: {
                index: '/',
                details: {
                    $pattern: '/{nr}',
                    $constraints: {
                        nr: /\d+/
                    }
                }
            },
            tags: '/tags',
            history: '/history'
        }
    };
});
