import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';

const appState = observable({
  count: 0
});

appState.dec = function() {
  this.count--;
};
appState.inc = function() {
  this.count++;
};

@observer class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDec = () => {
    appState.dec();
  }

  handleInc = () => {
    appState.inc();
  }

  render() {
    return(
      <div>
        <Devtools />
        Counter: {appState.count}
        <br />
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
      </div>
    );
  }
}

export default App;
