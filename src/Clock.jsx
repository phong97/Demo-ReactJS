import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1);
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time > 0) {
      const seconds = this.leading0(Math.floor((time / 1000) % 60));
      const minutes = this.leading0(Math.floor((time / 1000 / 60) % 60));
      const hours = this.leading0(Math.floor((time / 1000 / 60 / 60) % 24));
      const days = this.leading0(Math.floor(time / 1000 / 60 / 60 / 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }

  render() {
    return (
      <div className="Clock">
        <div className="Clock-days">{this.state.days} days</div>
        <div className="Clock-hours">{this.state.hours} hours</div>
        <div className="Clock-minutes">{this.state.minutes} minutes</div>
        <div className="Clock-seconds">{this.state.seconds} seconds</div>
      </div>
    );
  }
}
