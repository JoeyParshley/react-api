import React, {Component} from 'react';

class App extends Component{
  // create State to store the output from the API request
  state = {
    contacts: []
  };

  // Create Bootstrap Card
  render() {
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Steve Jobs</h5>
            <h6 className="card-subtitle mb-2 text-muted">steve@apple.com</h6>
            <p className="card-text">Stay Hungry, Stay Foolish</p>
          </div>
        </div>
    );
  }

  //calling the api
  /**
   * componentDidMount() - this method is executed immediately our component is mounted and
   * we will make the api request in that method
   */
  componentDidMount() {
    // ,ake GET resuest to the endpoint
    fetch('https://jsonholder.typicode.com/users')
        // parses the output to JSON
        .then(res => res.json)
        // set the value of the state to the output from the API call
        .then((data) => {
          this.setState({contacts:data})
        })
        // log any errors
        .catch(console.log)
  }
}

export default App;