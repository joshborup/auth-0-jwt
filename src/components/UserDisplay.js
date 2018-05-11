import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


export default class UserDisplay extends Component {
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
    render() {
        console.log(this.state.user)
        return (
            <div>
                {this.state.user ? 
                <div className='user-info-container'>
                    <div className='picture-container'>
                        <img src={this.state.user.picture}/>
                    </div>
                    <pre className='info'>
                     {JSON.stringify(this.state.user, null, 4)}
                    </pre>
                </div>
                :
                'nothing to see here'    
            }
            </div>
        );
    }
}
