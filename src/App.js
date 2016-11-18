import React from 'react';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';

const t = new class Temperature {
  @observable unit = "C";
  @observable temperatureCelsius = 25;

  @computed get temperatureKelvin() {
    console.log('Calculating Kelvin');
    return this.temperatureCelsius * (9/5) + 32;
  }

  @computed get temperature() {
    console.log('Calculating temperature');
    switch(this.unit) {
      case "K":
        return this.temperatureKelvin + "oK";
      case "C":
        return this.temperatureCelsius + "oC";
    }
  }
};

window.t = t;

const Temp = observer((props) => (
  <div>
    {props.temperature.temperature}
    <Devtools />
  </div>
));

class App extends React.Component {
  render() {
    return(
      <Temp temperature={t} />
    );
  }
}

export default App;
