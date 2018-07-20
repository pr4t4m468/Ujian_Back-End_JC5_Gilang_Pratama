import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    state = {
        login:[]
    }


    fungsiLogin = (e) => {
        axios.post('localhost:5000/login',{
            user: e.username.value,
            pwd: e.password.value
        }).then()
    }

  render() {
    return (
      <div>
        <div className="container mt-5 offset-md-3 col-md-4">
        <form method="post" action="/login">
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" ref="username" placeholder="admin" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="text" className="form-control" ref="password" placeholder="admin" />
        </div>
        <button type="submit" onClick={()=>{this.fungsiLogin(this.refs)}} className="btn btn-primary">Login</button>
      </form>
      </div>
      </div>
      
    );
  }
}

export default Login;
