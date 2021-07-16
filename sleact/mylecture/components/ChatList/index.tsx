import { ChatZone, Section, StickyHeader } from './styles';
import { IDM, IChat } from '@typings/db';
import React, { useCallback, useRef, VFC } from 'react';
import Chat from '@components/Chat';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  chatSections: { [key: string]: IDM[] };
}

const ChatList: VFC<Props> = ({ chatSections }) => {
  const scrollbarRef = useRef(null);
  const onScroll = useCallback((values) => {
    if (values.scrollTop === 0) {
      console.log('가장 위', values);
    }
  }, []);


  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  )
};

export default ChatList;