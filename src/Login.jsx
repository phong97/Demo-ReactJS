import React from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet';
// import axios from 'axios';

class Login extends React.PureComponent {
  state = {
    user: {
      username: '',
      password: ''
    },
    data: '',
    error: '',
    success: false
  }

  componentDidMount() {
    Cookies.remove('token');
  }

  handleOnClick = () => {
    console.log(this.state.user);
    // const {user} = this.state;
    // const api = ``;
    // axios.get(api, {user})
    //   .then(res => {
    //     const data = res.data;
    //     this.setState({ data });
    //   });
    const data = {
      success: true,
      token: 'abcd',
    };

    if (data.success) {
      const expires = (data.token || 60 * 60) * 10;
      const inOneHour = new Date(new Date().getTime() + expires);
      Cookies.set('token', data.token, { expires: inOneHour })
      this.setState({ success: true });
    } else {
      this.setState({ error: 'Username/Password is incorrect' });
    }
  }

  handleOnChange = (value, type) => {
    // có cách dùng ... nhanh hơn nhưng t quên mất rồi
    let { user } = this.state;
    user[type] = value;
    this.setState(user);
  }

  render() {
    const { success, user } = this.state;
    if (success) {
      return <Redirect to="/clock" />
    }
    let disabled = '';
    if (!user.username || !user.password) {
      disabled = "disabled";
    }

    return (
      <div className="Login">
        <Helmet
          titleTemplate="Login Page"
          defaultTitle="Login Page"
        >
          <meta name="description" content="A Login Page" />
        </Helmet>
        <div className="form" id="form">
          <h2>Login</h2>
          <form>
            <div className="input">
              <input
                type="text"
                onChange={(evt) => { this.handleOnChange(evt.target.value, 'username') }}
                value={user.username}
              />
              <label>Username</label>
            </div>
            <div className="input">
              <input
                type="password"
                onChange={(evt) => { this.handleOnChange(evt.target.value, 'password') }}
                value={user.password}
              />
              <label>Password</label>
            </div>
            <div className="footer-form">
              <button onClick={this.handleOnClick} disabled={disabled}>Submit</button>
              <span>{this.state.error && this.state.error}</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
