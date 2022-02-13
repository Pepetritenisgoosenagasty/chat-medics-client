import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components'
import './App.css'

const ApiKey = '4dnskztyubda';
const Client = StreamChat.getInstance(ApiKey);

const authToken = false;

const App = () => {

  if (!authToken) {
    return <Auth />
  }
  return (
    <div className='app__wrapper'>
      <Chat client={Client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App