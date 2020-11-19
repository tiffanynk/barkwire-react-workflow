import { Component } from 'react'
import './App.css';
import DogList from './DogList'

class App extends Component {
  state = {
    dogs: []
  }

  //one of the lifecycle hooks
  componentDidMount(){
    //async promise method. if the value is has a then method, the returned promise will 'follow' the thenable and adopt its eventual state, otherwise the returned promise will be fulfilled with the value. this does watch fetch does but doesn't require an API
    Promise.resolve()
      .then(() => {
        const dogs = [{
          name: 'Sal (Salami)',
          description: 'Best boi',
          imageUrl: 'https://i.pinimg.com/originals/76/8c/eb/768ceb6656046751f80bf5ff76ddfda9.jpg'
          },{
          name: 'Basil',
          description: 'Stout and wrinkly',
          imageUrl: 'https://media1.popsugar-assets.com/files/thumbor/5spQj7uULSX66Ogn-ipyS1QcY-E/994x6:4632x3644/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/08/07/864/n/1922243/64b3c8175d4b2a47a06de7.25939870_/i/Cute-Pictures-Pugs.jpg'
        }]
        this.setState( { dogs } )
      })
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>BarkWire</h1>
            <p>A dating app for dogs</p>
        </header>
        <main>
          <DogList dogs={this.state.dogs}/>
        </main>
      </div>
    );
  }
}

export default App;
