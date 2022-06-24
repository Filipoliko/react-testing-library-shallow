const { render } = require('@testing-library/react');
const { nativeCreateElement } = require('./react.js');
const mock = require('./mock.js');

function shallow(component) {
    let output = null;
    __reactTestingLibraryShallow.createElement = (...args) => {
        // Mock all react components except for the original one
        if (typeof args[0] !== 'string' && component.type !== args[0]) {
            args[0] = mock(args[0]);
        }

        return nativeCreateElement(...args);
    };

    try {
        output = render(component);
    } catch (error) {
        __reactTestingLibraryShallow.createElement = nativeCreateElement;

        throw error;
    }

    __reactTestingLibraryShallow.createElement = nativeCreateElement;

    return output;
}

module.exports = shallow;
