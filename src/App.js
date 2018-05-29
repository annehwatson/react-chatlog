import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Message from './components/Message';

class App extends Component {
  render() {
    console.log(chatMessages);
    let lookup = {}
    let participants = []

    //https://stackoverflow.com/questions/17780508/selecting-distinct-values-from-a-json
    for (let i = 0; i < chatMessages.length; i++) {
      let sender = chatMessages[i].sender;

      if (!(sender in lookup)) {
        lookup[sender] = 1;
        participants.push(sender);
      }
    }
    console.log(participants);

    let local = participants[0]
    let remote = participants[1]
    let localRemote = ""

    const chats =
    chatMessages.map((chat) => {
      if (chat.sender === local) {
        localRemote = "local";
        console.log(localRemote)
      } else {
        localRemote = "remote";
        console.log(localRemote)
      }

      return <Message person={ chat.sender } text={ chat.body } timeStamp={ chat.timeStamp } />

    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat between { local } and { remote }</h1>
        </header>
        <main className="App-main">
          <div className={"chat-entry " + localRemote}>
            { chats }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
