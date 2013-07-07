/*global requirejs*/

requirejs.config({
    baseUrl: './dev/src',
    paths: {
        'mout': '../components/mout/src',
        'events-emitter': '../components/events-emitter/src',
        'address': '../components/address/src',
        'text': '../components/requirejs-text/text',
        'has': '../components/has/has',
        'jquery': '../components/jquery/jquery',
        'doT': '../components/doT/doT',
        'bootstrap': '../components/components-bootstrap'
    },
    shim: {
        'bootstrap/js/bootstrap': {
            deps: ['jquery'],
            exports: '$'
        }
    },
    map: {
        '*': {
            // App config (defaults to dev but changes during build)
            'app-config': '../app/config/config_dev',

            // Spoon
            'spoon': '../components/spoonjs/src/index',

            // Spoon aliases
            'spoon/Controller': '../components/spoonjs/src/core/Controller',
            'spoon/View': '../components/spoonjs/src/core/View',

            // Spoon services
            'services/broadcaster': '../components/spoonjs/src/core/Broadcaster/BroadcasterFactory',
            'services/address': '../components/spoonjs/src/core/Address/AddressFactory',
            'services/state': '../components/spoonjs/src/core/StateRegistry/StateRegistryFactory'
        }
    },
    packages: [
        // CSS plugin
        {
            name: 'css',
            location: '../components/require-css',
            main: 'css'
        }
    ]
});
