import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import Button from '../../components/Button';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Text from '../../components/Text';

const NavButton = ({ children, text, ...props }) => (
  <Button is={Link} {...props}>
    <Flex align='center' height="60px">
      <Box>
        <Text
          fontSize="16px"
          fontFamily="YuMincho"
          lineHeight="1.2"
        >
          {text}
        </Text>
        <Text
          color="gray"
          fontSize="10px"
          fontFamily="Playfair Display"
          fontWeight="100"
          transform="scale(0.8)"
          lineHeight="1.2"
          textTransform="uppercase"
        >
        {children}
        </Text>
      </Box>
    </Flex>
  </Button>
);

NavButton.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
};

export default NavButton;
