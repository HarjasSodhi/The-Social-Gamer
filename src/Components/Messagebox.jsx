import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function Messagebox() {
  return (
    <>
    <ChatEngine
			height='100vh'
			userName="Rupin"
			userSecret="12345"
			projectID='2e3ef6c2-1d8a-43b5-8959-c46096012af7'
		/>
    </>
  );
}

export default Messagebox;