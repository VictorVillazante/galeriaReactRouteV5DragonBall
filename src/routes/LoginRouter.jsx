import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LoginScreen from '../pages/LoginScreen';
import AppRouter from '../routes/AppRouter';

const LoginRouter = () => {
  return (
    <Router>
      <AppRouter/>
      <Switch>
        <Route exact path="/login" component={LoginScreen}/>
      </Switch>
    </Router>
  )
}

export default LoginRouter