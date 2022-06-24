const React = require('react');
const mock = require('./mock.js');

global.__reactTestingLibraryShallow = {
    createElement: (...args) => {
        if (global.__reactTestingLibraryShallow.active) {
            // Mock all react components except for the original one
            if (typeof args[0] !== 'string' && component.type !== args[0]) {
                args[0] = mock(args[0]);
            }
        }

        return React.createElement(...args);
    },
};
