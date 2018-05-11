import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount(){
    
 
        axios.get('/api/user_data').then(response => {
            this.setState({
                user: response.data
            })
        })
    }

  


  login = () => {
    
    this.auth0 = new auth0.WebAuth({
      domain: 'joshborup.auth0.com',
      clientID: 'Hu0tt3KxizbhLTKxAhgXepjgPJwdvyvq',
      redirectUri: 'http://localhost:3000/callback',
      audience: 'https://joshborup.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid email profile'
    });
    this.auth0.authorize()
  }

  logout = () => {
    axios.post('/api/logout').then(() => {
      this.setState({
           user: null
         });
    });
    window.location.href = '/'
  }


  render() {


    return (
      <div className="login">
        <div>

          {this.state.user ?<div><button className='logout-button' onClick={this.logout}>Log out</button><Link to='/userInfo'>to User Info</Link> </div> : <button className='login-button' onClick={this.login}>Log in</button>}
        
        </div>
      </div>
    );
  }
}

export default Login;
