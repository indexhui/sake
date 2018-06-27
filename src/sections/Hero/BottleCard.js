import React from 'react';
import PropTypes from 'prop-types';

import BackgroundImage from '../../components/BackgroundImage';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Text from '../../components/Text';

import bottleImage from './smallBottle.svg';

const BottleCard = ({ children, ...props }) => (
  <Box p="1em" {...props}>
    <BackgroundImage ratio={1} src={bottleImage} boxShadow= "1px 0px 3px #888888">
      <Flex
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        align="center"
        justifyContent="center"
      >
        <Text whiteSpace="pre">{children}</Text>
      </Flex>
    </BackgroundImage>
  </Box>
);

BottleCard.propTypes = {
  children: PropTypes.node,
};

export default BottleCard;
