import React, { useContext } from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../pages/LoginScreen';
import AppRouter from '../routes/AppRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const LoginRouter = () => {
  const {log}=useContext(AuthContext);
  return (
    <Router forceRefresh={true}>
      {/* <AppRouter/> */}
      <Switch>
        {/* <Route exact path="/login" component={LoginScreen}/> */}
        <PublicRouter path="/login" auth={log} component={LoginScreen}/>
        <PrivateRouter path="/" auth={log} component={AppRouter}/>

      </Switch>
    </Router>
  )
}

export default LoginRouter