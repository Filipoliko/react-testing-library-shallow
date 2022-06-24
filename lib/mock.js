const React = require('react');

function mock(component) {
    function Shallow({ children, ...props }) {
        return React.createElement('div', {
            shallow: component.displayName || component.name,
            props: JSON.stringify(props)
        }, children);
    }
  
    return Shallow;
}

module.exports = mock;
