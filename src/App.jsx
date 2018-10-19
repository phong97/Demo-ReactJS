import React from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: '',
      newDeadline: '',
      isAuthenticated: true
    }
  }

  componentDidMount() {
    const token = Cookies.get('token');
    if (!token) {
      this.setState({ isAuthenticated: false });
    }
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/" />
    }
    return <div className="App">
      <Helmet
        titleTemplate="Clock Page"
        defaultTitle="Clock Page"
      >
        <meta name="description" content="A Clock Page" />
      </Helmet>
      <div className="App-title">Countdown to {this.state.deadline}</div>
      <div>
        <div>
          <Clock deadline={this.state.deadline} />
          <Form inline>
            <FormControl
              className="Deadline-input"
              placeholder='new date'
              onChange={event => this.setState({ newDeadline: event.target.value })}
            />
            <Button onClick={() => this.changeDeadline()}>Submit</Button>
          </Form>
        </div>
      </div>
    </div>;
  }
}

export default App;
