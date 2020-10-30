import React from 'react';
import './App.css';
import axios from "axios";
import Header from './components/Header';
import Main from './components/Main';
// import API from './components/utils/API.js';


class App extends React.Component {

  state = {
    employees: [],
  };

  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=50&nat=us`)
        .then(res => {
          this.setState({ employees: res.data.results });
        });
  }


  render() {
    return (
      <div className="App">
        <Header />
       
        {this.state.employees.length &&
        <Main employees={this.state.employees}/>
      
  }

      </div>
    );
  }
}

export default App;
