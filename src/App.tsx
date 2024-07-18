import React from 'react';
import logo from './logo.svg';
import '@frontend/stencil.examples.my-stencil-comp';
import { wrapWc } from 'wc-react';
import './App.css';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-stencil-comp': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function App() {
  const MyStencilComponent = wrapWc('my-stencil-comp');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <my-stencil-comp></my-stencil-comp>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
