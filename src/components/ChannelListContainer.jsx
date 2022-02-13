import React from 'react'
import { ChannelList, useChatContent } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'


const Sidebar = () => (
    <>
        <div className='channel-list__sidebar'>
            <div className='channel-list__sidebar__icon1'>
                <div className='icon1__inner'>
                    <img src={HospitalIcon} alt='hospital' width={30} />
                </div>
            </div>
            <div className='channel-list__sidebar__icon2'>
                <div className='icon2__inner'>
                    <img src={LogoutIcon} alt='hospital' width={30} />
                </div>
            </div>
        </div>
    </>
)

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Medical Pager</p>
    </div>
)


function ChannelListContainer() {
    return (
        <>
            <Sidebar />
            <div className='channel-list__list__wrapper'>
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listProps) => (
                        <TeamChannelList  {...listProps} type="team" />
                    )}
                    Preview={(PreviewProps) => (
                        <TeamChannelPreview {...PreviewProps} type="team" />
                    )}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listProps) => (
                        <TeamChannelList  {...listProps} type="messaging" />
                    )}
                    Preview={(PreviewProps) => (
                        <TeamChannelPreview {...PreviewProps} type="messaging" />
                    )}
                />
            </div>
        </>
    )
}

export default ChannelListContainer