import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import Tab from './components/Tab';

function Header(props) {
  return (
    <div>
      <h1> {props.title} </h1>
      <h2> {props.desc} </h2>
      <button onClick={() => console.log(props.desc)} > X </button>
      <hr/>
    </div>
  )
}

class App extends Component {

 state = {
  tabArr: [
   {name: 'tab 1', content: 'content Tab1' },
   {name: 'tab 2', content: 'content Tab2' },
   {name: 'tab 3', content: 'content Tab3' },
  ]
 }

 componentDidMount() {
  setTimeout(() => this.setState({
   tabArr: [
    {name: 'tab 1', content: 'content Tab1' },

    {name: 'tab 3', content: 'content Tab3' },
   ]
  }), 2000)
 }

 render() {
  return (
   <div className="App">
    <div className="App-header">
     <img src={logo} className="App-logo" alt="logo"/>
     <h2>Welcome to React</h2>
    </div>
    <Tabs>
     {this.state.tabArr.map(item => <Tab key={item.name} name={item.name}>{item.content}</Tab>)}
    </Tabs>
   </div>
  );
 }
}

export default App;
