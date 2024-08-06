import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count;
  }

  increment = () => { 
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('Contador atualizado de', prevState.count, 'para', this.state.count);
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.increment}>Incrementar</button>
      </div>
    );
  }
}

export default Counter;
