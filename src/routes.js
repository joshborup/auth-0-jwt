import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Callback from './components/Callback';
import UserDisplay from './components/UserDisplay';


export default (
    
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/callback' component={Callback}/>  
        <Route path='/userInfo' component={UserDisplay}/>
    </Switch>

)