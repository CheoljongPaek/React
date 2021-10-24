import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React from 'react'
import { PostSnippetFragment, PostsQuery, useVoteMutation } from '../generated/graphql';

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

const Updootsection: React.FC<UpdootSectionProps> = ({post}) => {
  const [{fetching, operation}, vote] = useVoteMutation();
  
  return (
    <Flex 
      flexDirection="column" 
      justifyContent="space-evenly" 
      alignItems="center"
      mr={4}
    >
      <IconButton 
        onClick={() => {
          vote({
            value: 1,
            postId: parseInt(post.id)
          })
        }}
        isLoading = {
          fetching
        }
        aria-label="updoot post" 
        icon={<ChevronUpIcon />}
      />
      {post.points}
      <IconButton 
        onClick={() => {
          vote({
            value: -1,
            postId: parseInt(post.id)
          })
        }}
        isLoading = {
          fetching
        }
        aria-label="downdoot post" 
        icon={<ChevronDownIcon />}
      />
    </Flex>
  );
}


export default Updootsection