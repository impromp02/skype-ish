import React from 'react';

const ChatWindow = ({ activeUserId }) => {
  return (
    <div className="ChatWindow">
      Converstation for user id: {activeUserId}
    </div>
  );
};

export default ChatWindow;