# React Testing Library Shallow

This library implements `shallow` rendering for [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

*Work in progress! This library is currently optimized only for [Jest](https://jestjs.io) with [`@swc/jest`](https://www.npmjs.com/package/@swc/jest) used for the code transpilation.*

## Setup

Following configuration of `@swc/jest` is needed.

```javascript
{
    jsc: {
        transform: {
            react: {
                pragma: '__reactTestingLibraryShallow.createElement',
                runtime: 'classic',
            },
        },
    },
},
```

Following configuration of `jest` is needed.

```javascript
{
    // This setup file entry should be used as early as possible
    setupFiles: ['react-testing-library-shallow/lib/setup.js'],
}
```

## Usage

```javascript
import shallow from 'react-testing-library-shallow`;
import MyComponent from './MyComponent';

describe('MyComponent', () => {
    test('can be shallow rendered', () => {
        expect(shallow(<MyComponent value={1} />)).toMatchSnapshot();
    });
});
```
