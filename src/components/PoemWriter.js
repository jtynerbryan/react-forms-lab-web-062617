import React from 'react';
let splitted;
let message = ""

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    splitted = event.target.value.split("\n")
    if (splitted.length !== 3 || splitted[0].replace(/\s\s+/g, ' ').trim().split(' ').length !== 5 || splitted[1].replace(/\s\s+/g, ' ').trim().split(' ').length !== 3 || splitted[2].replace(/\s\s+/g, ' ').trim().split(' ').length !== 5) {
      message = <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        > 
          "This poem is not written in the right structure!"
        </div>
    } else {
      message = ''
    }
    
    this.setState({
      text: event.target.value
    })

  }



  render() {
    return (
      <div>
        <textarea value={this.state.text} onChange={ (event) => this.handleChange(event)}
          rows="3" 
          cols="60" 
        />
        {message}
      </div>
    );
  }
}

export default PoemWriter;


