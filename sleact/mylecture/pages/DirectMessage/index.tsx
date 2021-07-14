import { Container, DragOver, Header } from './styles';
import React, { useCallback } from 'react';
import gravatar from 'gravatar';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router'
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import axios from 'axios';

const DirectMessage = () => {
  //http://localhost:3090/workspace/{sleact}/dm/{7}
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  //userData는 상대방데이터
  const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  //누가 누구한테 메세지를 보내는지 알기 위해 내정보도 필요
  const { data: myData } = useSWR(`/api/users`, fetcher);
  const { data: chatData, mutate: mutateChat, revalidate } = useSWR(
    `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=1`,
    fetcher,
  );
  const [chat, onChangeChat, setChat] = useInput('');

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log(chat);
    if (chat?.trim()) {
      axios.post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
        content: chat,
      })
        .then(() => {
          revalidate();
          setChat('');
        })
        .catch(console.error);
    }
  },[chat]);

  //최하단
  if (!userData || !myData) {
    return null;
  }

  //ChatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat })
  return (
    <Container>
      <Header>
        <img src={gravatar.url(userData.email, { s: '24px', d: 'retro' })} alt={userData.nickname} />
        <span>{userData.nickname}</span>
      </Header>
      <ChatList />
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
      {false && <DragOver>업로드!</DragOver>}
    </Container>
  );
};

export default DirectMessage