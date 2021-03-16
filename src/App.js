 import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
 componentWillMount() {
    fetch( 'https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( items => this.setState({items}))
 }
  filter(e){
    this.setState({filter: e.target.value})
  }
  render(){
    let items = this.state.items
    if( items && this.state.filter){
      items = items.filter( item =>
      item.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text"
          onChange={this.filter.bind(this)}/>
        {items && items.map(item =>
          <Users key={item.name} users={item} />)}
      </div>
    )
  }
}

const Users = (props) => <h4>{props.users.name}</h4>

export default App;

