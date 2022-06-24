const { render } = require('@testing-library/react');

function shallow(component) {
    let output = null;
    __reactTestingLibraryShallow.active = true;

    try {
        output = render(component);
    } catch (error) {
        __reactTestingLibraryShallow.active = false;

        throw error;
    }

    __reactTestingLibraryShallow.active = false;

    return output;
}

module.exports = shallow;
