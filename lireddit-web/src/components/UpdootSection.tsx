import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react'
import { PostSnippetFragment, PostsQuery, useVoteMutation } from '../generated/graphql';

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

const Updootsection: React.FC<UpdootSectionProps> = ({post}) => {
  const [loadingState, setLoadingState] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >("not-loading");
  const [{}, vote] = useVoteMutation();
  // console.log(`${post.id}: ${post.voteStatus}`);
  // console.log(post);
  
  return (
    <Flex 
      flexDirection="column" 
      justifyContent="space-evenly" 
      alignItems="center"
      mr={4}
    >
      <IconButton 
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          };
          setLoadingState("updoot-loading");
          await vote({
            value: 1,
            postId: post.id
          });
          setLoadingState("not-loading");
        }}
        isLoading = {
          loadingState === "updoot-loading"
        }
        colorScheme={post.voteStatus === 1 ? "green" : undefined}
        aria-label="updoot post" 
        icon={<ChevronUpIcon />}
      />
      {post.points}
      <IconButton 
        onClick={async() => {
          if (post.voteStatus === -1) {
            return;
          };
          setLoadingState("downdoot-loading");
          await vote({
            value: -1,
            postId: post.id
          });
          setLoadingState("not-loading");
        }}
        isLoading = {
          loadingState === "downdoot-loading"
        }
        colorScheme={post.voteStatus === -1 ? "red" : undefined}
        aria-label="downdoot post" 
        icon={<ChevronDownIcon />}
      />
    </Flex>
  );
}


export default Updootsection