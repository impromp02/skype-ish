import React from "react";
import store from "../store";
import "./MessageInput.css";
import { setTypingValue, sendMessage } from "../actions";


const handleChange = e => {
  store.dispatch(setTypingValue(e.target.value));
};

const handleSubmit = e => {
  const state = store.getState();  
  e.preventDefault();
  const { typing, activeUserId } = state;
  store.dispatch(sendMessage(typing, activeUserId));
};

const MessageInput = ({ value }) => {
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};




export default MessageInput;