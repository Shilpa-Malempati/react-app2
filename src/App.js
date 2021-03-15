
// class 12: Use map to Create React Components from Arrays of Data

// import React from 'react';

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {items: []}
//   }
//  componentWillMount(){
//     fetch( 'https://jsonplaceholder.typicode.com/todos' )
//       .then( response => response.json() )
//       // .then (json => console.log(json))
//       .then(({todos: items}) => this.setState({items}))
//   }
//   filter(e){
//     this.setState({filter: e.target.value})
//   }
//   render(){
//     let items = this.state.items
//     if( items && this.state.filter){
//       items = items.filter( item =>
//       item.title.toLowerCase()
//       .includes(this.state.filter.toLowerCase()))
//     }
//     return (
//       <div>
//         <input type="text"
//           onChange={this.filter.bind(this)}/>
//         {items && items.map(item =>
//           <Todos key={item.title} todos={item} />)}
//       </div>
//     )
//   }
// }

// const Todos = (props) => <h4>{props.todos.title}</h4>

// export default App;



 import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
 componentWillMount(){
    fetch( 'https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      // .then (json => console.log(json))
      .then(({results: items}) => this.setState({items}))
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

