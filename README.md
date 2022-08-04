# e-react-ui

Experiment to create a React component library based on 💅🏾 [styled-components](https://styled-components.com/). There are some examples at https://ecelis.github.io/e-react-ui/

## Install

```
npm install --save styled-components e-react-ui
```

## Usage

In a new `create-react-app` use the code below in `src/App.js` and run `npm start`.

```
import logo from './logo.svg';
import './App.css';
import 'e-rect-ui/dist/e-react-ui.css';
import { Button } from 'e-react-ui/dist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button label="Click Me" />
      </header>
    </div>
  );
}

export default App;
```
