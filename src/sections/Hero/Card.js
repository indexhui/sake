import React from 'react';
import Flex from '../../components/Flex';
import PropTypes from 'prop-types';
import BackgroundImage from '../../components/BackgroundImage';
import Box from '../../components/Box';
import Border from '../../components/Border';
import Text from '../../components/Text';

import bottle from './bottle.svg';

const Card = ({ children, text, ...props }) => (
  <Box {...props} position="relative" mx="2.5em">
    <Flex
      align="center"
      justifyContent="center"
      position="relative"
      w="100%"
      py="20%"
    >
      <BackgroundImage
        src={bottle}
        width="40%"
        ratio={136 / 50}
      />
      <Flex
        position="absolute"
        top="0"
        bottom="0"
        content=" "
        display="flex"
        align="center"
        justifyContent="center"
      >
        <Text textAlign="center" whiteSpace="pre">
          {children}
        </Text>
      </Flex>
    </Flex>
    <Box
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      mx="auto"
      align="center"
    >
      <Border
        borderBottom="6px solid"
        borderColor="#F2F2F2"
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        mx="auto"
        align="center"
        w="90%"
      >
        <Border
          borderBottom="1px solid"
          borderColor="red"
          position="absolute"
          bottom="-6px"
          left="0"
          align="center"
          w="30%"
        />
      </Border>
    </Box>
  </Box>
);

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
