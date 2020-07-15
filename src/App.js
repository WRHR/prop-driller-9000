import React from 'react';
import './App.css';
import ProptimusOmega from './proptimusOmega'
import ProptimusBeta from './ProptimusBeta'
import ProptimusPrime from './ProptimusPrime'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      activeProp: "",
      catchPhrases: ["I'm here!", 'Me Too!', "Doesn't get better than this!"]
    }
  }


  callForBadHelp = (event) => {
    console.log('Bad help has arrived')
    this.setState({
      activeProp: 'Proptimus Omega'
    })
  }

  callForBetterHelp = (event) => {
    console.log('Better help has arrived')
    this.setState({
      activeProp: 'Proptimus Beta'
    })
  }

  gimmeAllYouGot = (event) => {
    console.log('This is all we have left...')
    this.setState({
      activeProp:'Proptimus Prime'
    })
  }

  sendThemHome = (event) => {
    this.setState({
      activeProp:''
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
            onClick={this.callForBadHelp}
          />

          {this.state && this.state.activeProp === 'Proptimus Omega' &&
          <>
            <p className="">Will this do, human?</p>
            <ProptimusOmega
              img={this.state.proptimusPhotos["Proptimus Omega"]}
              callForBetterHelp = {this.callForBetterHelp}
              catchPhrase = {this.state.catchPhrases[0]}

            />
          </>
          }
          {this.state && this.state.activeProp === 'Proptimus Beta' &&
          <>
            <p className="">Will this do, human?</p>
            <ProptimusBeta
              img={this.state.proptimusPhotos["Proptimus Beta"]}
              gimmeAllYouGot = {this.gimmeAllYouGot}
              catchPhrase = {this.state.catchPhrases[1]}
      
            />
          </>
          }
          {this.state && this.state.activeProp === 'Proptimus Prime' &&
          <>
            <p className="">Will this do, human?</p>
            <ProptimusPrime
              img={this.state.proptimusPhotos["Proptimus Prime"]}
              sendThemHome= {this.sendThemHome}
              catchPhrase = {this.state.catchPhrases[2]}
            />
          </>
          }

        </header>
      </div>
    );
  }
}
