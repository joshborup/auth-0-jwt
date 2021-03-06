import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import loader from '../loader.gif';

export default class Callback extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        
    }

    componentDidMount(){
        
        let test = window.location.href.includes('=') ? window.location.href.split('id_token=')[1] : '';
        
        console.log('hash', window.location.hash)
        
        
        if(test) {

        let userInfo = jwtDecode(test)
            
            axios.post('/api/login', userInfo).then((response) => {

                this.setState({
                    user: response.data
                    });
                })
                window.location.href = '/'
            }
        }

    render() {

        const style = {
            width: '200px'
        }

        return (
            <div>
                <img style={style} src={loader} />
            </div>
        );
    }
}   
