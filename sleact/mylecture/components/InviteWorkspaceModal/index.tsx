import Modal from '@components/Modal';
import useInput from '@hooks/useInput';
import { Button, Input, Label } from '@pages/SignUp/styles';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, VFC } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useSWR from 'swr';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowInviteChannelModal: (flag: boolean) => void;
}

const InviteWorkspaceModal: VFC<Props> = ({ show, onCloseModal, setShowInviteChannelModal }) => {
  const [newMember, onChangeNewMember, setNewMember] = useInput('');
  const { workspace } = useParams<{ workspace: string; channel: string }>();

  const { data: userData, error, revalidate } = useSWR<IUser | false>(
    '/api/users', 
    fetcher, 
    {
      dedupingInterval: 2000, // 2초
    }
  );
  //GET: ${workspace} 내부의 멤버 목록을 가져온다.
  /*
  MySQL 살펴보면서 데이터베이스와 프론트의 상호작용 파악하기.
  
  */
  const { revalidate: revalidateMember } = useSWR<IUser[]>(
    userData ? `/api/workspaces/${workspace}/members` : null,
    fetcher,
  );

  const onInviteMember = useCallback(
    (e) => {
      e.preventDefault();
      if (!newMember || !newMember.trim()) {
        return;
      };
      //POST: ${workspace}로 sleact에 가입된 멤버를 새로 추가한다.
      axios
        .post(
          `/api/workspaces/${workspace}/members`,
          {
            email: newMember,
          },
          {
            withCredentials: true,
          },
        )
        .then((response) => {
          setShowInviteChannelModal(false);
          revalidateMember(); // post 요청으로 추가된 멤버들의 목록을 불러오기 위해 useSWR의 GET요청을 다시 보낸다.
          setNewMember('');
        })
        .catch((error) => {
          console.dir(error);
          toast.error(error.response?.data, { position: 'bottom-center' });
        });
    },
    [workspace, newMember],
  );

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onInviteMember}>
        <Label id="member-label">
          <span>이메일</span>
          <Input id="member" type="email" value={newMember} onChange={onChangeNewMember} />
        </Label>
        <Button type="submit">초대하기</Button>
      </form>
    </Modal>
  );
};

export default InviteWorkspaceModal;