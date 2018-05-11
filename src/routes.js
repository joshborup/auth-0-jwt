import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login';
import Callback from './components/Callback';
import UserDisplay from './components/UserDisplay';


export default (
    
    <Switch>
        {/* <Route exact path='/' render={() => (<Redirect to="/login" />)} />  */}
        <Route exact path='/' component={Login}/>
        <Route path='/userInfo' component={UserDisplay}/> 
        <Route basename='/callback' component={Callback}/>   
    </Switch>

)