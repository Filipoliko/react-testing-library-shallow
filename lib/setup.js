const { nativeCreateElement } = require('./react.js');

global.__reactTestingLibraryShallow = {
    createElement: nativeCreateElement,
};
