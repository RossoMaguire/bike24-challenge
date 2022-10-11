import React from 'react';
import { Flex } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Flex paddingBottom={20}>
      <a href='https://www.bike24.com/' target='_blank' rel='noreferrer'>
        <img
          style={{ maxWidth: '40%' }}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDR23DbNiTZ_lm_g8VkgU2ijcP5jSptbEZZYewDLs&s'
        />
      </a>
    </Flex>
  );
};

export default Header;
