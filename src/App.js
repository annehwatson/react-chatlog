import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Message from './components/Message';

class App extends Component {
  render() {
    console.log(chatMessages);

    const chats =
    chatMessages.map((chat) => {
      return <Message person={ chat.sender } text={ chat.body } timeStamp={ chat.timeStamp } />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat between local and remote</h1>
        </header>
        <main className="App-main">
          <div className="chat-entry local">
            { chats }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
