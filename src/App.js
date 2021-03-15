
// class 12: Use map to Create React Components from Arrays of Data

import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
 componentWillMount(){
    fetch( 'https://jsonplaceholder.typicode.com/todos' )
      .then( response => response.json() )
      .then (json => console.log(json))
      .then(({todos: items}) => this.setState({items}))
    // .then(json => {
    //     this.setState({ todo: json });
    //   });
    

  }
  filter(e){
    this.setState({filter: e.target.value})
  }
  render(){
    let items = this.state.items
    if(this.state.filter){
      items = items.filter( item =>
      item.title.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text"
          onChange={this.filter.bind(this)}/>
        {items.map(item =>
          <Todos key={item.title} person={item} />)}
      </div>
    )
  }
}

const Todos = (props) => <h4>{props.todos.title}</h4>

export default App;
