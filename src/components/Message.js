import React, { Component } from 'react';
import '../App.css';
import Timestamp from './Timestamp';

class Message extends React.Component {
  render() {
    let person = this.props.person
    let text = this.props.text
    let timeStamp = this.props.timeStamp

    return (
      <section>
        <div className="entry-name">
          { person }
        </div>

        <div className="entry-bubble">
          <div className="entry-body">
            { text }
          </div>

          <div className="entry-time">
            { timeStamp }
          </div>
        </div>
      </section>
    );
  }
}

export default Message;
