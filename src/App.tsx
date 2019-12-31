import React from 'react';
import './App.css';
import {createCar, IGarage} from "./state";

interface IProps {
  garage: IGarage
}

interface IState {
  title: string
  year: number
}

class App extends React.Component<IProps, IState> {
  state = {
    title: "",
    year: 2019
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            {this.props.garage.getAllCars().map(c => <div>{c.model} - {c.year}</div>)}
            <div>
              <div>
                Title:
                <input onChange={(e) => this.setState({title: e.currentTarget.value})}
                       value={this.state.title} />
              </div>
              <div>
                Year:
                <input onChange={(e) => this.setState({year: Number(e.currentTarget.value)})}
                       type="number" value={this.state.year}/>
              </div>
              <div>
                <button onClick={this.addCar}>Add car</button>
              </div>
            </div>
          </header>
        </div>
    );
  }

  addCar = () => {
    this.props.garage.addCar(createCar(this.state.title, this.state.year))
  }
}

export default App;
