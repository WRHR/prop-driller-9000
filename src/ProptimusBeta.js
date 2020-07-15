import React from 'react';

export default class ProptimusBeta extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    return(
      <section>
        <img
          src={this.props.img}
          className="App-logo"
          alt="logo"
          onClick={this.props.gimmeAllYouGot}
        />
        <p>{this.props.catchPhrase}</p>
      </section>
    )
  }
}
