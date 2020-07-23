import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ManageBanks from './components/ManageBanks';
import BankingOperations from './components/BankingOperations';
import PlanningBudget from './components/PlanningBudget';
import OperationBancaire from './components/OperationBancaire';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            
            <Route exact path='/' component={Home}/>
            
            <Route path='/Manage Banks' component={ManageBanks} />
            <Route path='/Banking Operations' component={BankingOperations} />
            <Route path='/Planning and Budget' component={PlanningBudget} />
            <Route path='/Operation Bancaire' component={OperationBancaire} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
