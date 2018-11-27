## Editting Pages 

You can see all the pages within `src/Pages/{directoryName}/{directoryFile}` and edit them accordingly.
Within the `return` method. You would always need to wrap the content with a parent element. Which in this case is a `div`.
```js
import React, { Component } from 'react';

class Example extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default Example;
```
You can have as many elements within the parent element. But elements can't be on the same level as the parent element. For example you can't do this: 
```js
import React, { Component } from 'react';

class Example extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
      <div>
        <h1>Hello again</h1> // THIS IS INCORRECT
      </div>
    );
  }
}

export default Example;
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
