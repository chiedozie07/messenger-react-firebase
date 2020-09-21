import React, { useState, useEffect } from "react";
import Message from "./Message";

import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import "./App.css";
import firebase from "firebase";
import db from "./firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  console.log(messages);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
    console.log(messages);
  }, []);

  useEffect(() => {
    setUsername(prompt("Please Enter you name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Welcome {username}</h1>

      <form className="app__form">
        <FormControl className="app__form_input">
          <InputLabel>Enter a Message...</InputLabel>
          <Input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </FormControl>

        <Button
          onClick={sendMessage}
          type="submit"
          variant="contained"
          color="primary"
          disabled={!input}
        >
          <SendIcon />
        </Button>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
