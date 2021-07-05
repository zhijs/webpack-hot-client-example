import React from 'react'; 

export default class Count extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1  
    }  
  }
  render () {
    return (
      <div>
        <p>{ this.state.count }</p>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1  
          })  
        }}>+1</button> 
      </div>  
    ) 
  }
 
}
