import React from 'react'
import { ChannelList, useChatContent} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview} from './'


const Sidebar = () => (
    <>
        <div className='channel-list__sidebar'>
            <div className='channel-list__sidebar__icon1'>
                <div className='icon1__inner'>
                    <img src='' alt='hospital' width={30}/>
                </div>
            </div>
            <div className='channel-list__sidebar__icon2'>
                <div className='icon2__inner'>
                    <img src='' alt='hospital' width={30}/>
                </div>
            </div>
        </div>
    </>
)


function ChannelListContainer() {
  return (
    <>
        <Sidebar />
    </>
  )
}

export default ChannelListContainer