const React = require('react');

function mock(component) {
    function Shallow({ children, ...props }) {
        let displayProps = {};

        try {
            displayProps = JSON.stringify(props);
        } catch (e) {
            global.$Debug && console.error('Failed to stringify component props.\n', e);
        }

        return React.createElement('div', {
            shallow: component.displayName || component.name,
            props: JSON.stringify(props)
        }, children);
    }
  
    return Shallow;
}

module.exports = mock;
