# e-react-ui

Experiment to create a React component library based on 💅🏾 [styled-components](https://styled-components.com/). There are some examples at https://ecelis.github.io/e-react-ui/

[![Edit ecstatic-fog-5r7pb0](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ecstatic-fog-5r7pb0?fontsize=14&hidenavigation=1&theme=dark)

## Features

- Grid system
- Autocomplete searchbox
- Buttons
- Calendar (WIP #10)
- Container with overflow control
- List

## Install

```
npm install --save styled-components e-react-ui
```

## Usage

In a new `create-react-app` use the code below in `src/App.js` and run `npm start`.

⚠️ IMPORTANT! Do NOT FORGET to add `<GlobalStyle />` in you App entrypoint react component as sibling of components created with e-react-ui.

```javascript
import logo from './logo.svg';
import './App.css';
import { GlobalStyle, Button } from 'e-react-ui/dist';
import GlobalStyles from 'e-react-ui/dist/components/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
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
