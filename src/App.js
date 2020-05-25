import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import MobxTodoList from './components/MobxTodoList';
import UserPage from './components/UsersPage';
import {Provider} from 'mobx-react'; 
import "./App.css";
import stores from './stores';
import React from 'react';
import ProductPage from './Ecommerce-App/Components/clothesDashboard';
import EnhancedAdd from './common/components/add';
import PracticeAdvancedConceptsRoute  from './common/routes/PracticeAdvancedConcepts/PracticeAdvancedConcepts';
import MouseTracker from './common/components/MouseTracker';

import MouseFunctionality from './common/components/MouseFunctionality';

import Button from './components/button/button.stories';

class App extends React.Component {
  render() {
  return (
    <Provider {...stores} >
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/users-page" component={UserPage}></Route>
        <Route exact path="/mobxTodoStore">
          <MobxTodoList />
        </Route>
        <Route exact path="/ProductStore">
           <ProductPage />
        </Route>
        <Route path="/EnhancedAdd">
          <EnhancedAdd />
        </Route>
        <Route path="/PracticeAdvancedConceptsRoute">
          <PracticeAdvancedConceptsRoute />
        </Route>
        <Route path="/Mouse">
          <MouseTracker />
        </Route>
        <Route path="/Button">
          <Button />
        </Route>
        <Route path="/MouseFunctionality">
          <MouseFunctionality />
        </Route>
        
        <Route path="/">
          <HomePage />
        </Route>
        </Switch>
    </Router>
    </Provider>
  );
  }
}

export default App;
