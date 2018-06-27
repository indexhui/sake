import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Container from '../../components/Container';
import BackgroundImage from '../../components/BackgroundImage';
import Button from '../../components/Button';
import Border from '../../components/Border';
import Text from '../../components/Text';

import sections from '../../sections';

import NavButton from './NavButton';
import logo from './logo.svg';

const Header = ({ onSectionActive, ...props }) => (
  <Box w="100%" bg="rgba(255,255,255,0.9)" {...props}>
    <Container maxWidth="100%">
      <Flex
        justifyContent='center'
        align='center'
        height="60px"
      >
        <Button
          is={Link}
          to="hero"
          spy
          smooth
          onSetActive={onSectionActive}
        >
          <Flex
            justifyContent='center'
            align='center'
            height="60px"
          >
            <BackgroundImage
              src={logo}
              height="25px"
              width="140px"
              ratio={25 / 140}
            />
          </Flex>
        </Button>
        {sections.map((section) => (
          <NavButton
            key={section.slug}
            to={section.slug}
            offset={-120}
            spy
            smooth
            onSetActive={onSectionActive}
            children={section.slug}
            text={section.text}
            height="60px"
          >
          </NavButton>
        ))}
        <Button
          is={Link}
          to="hero"
          spy
          smooth
          onSetActive={onSectionActive}
          bg="white"
          height="60px"
          px="0"
          w="150px"
          position="relative"
          boxShadow= "1px 0px 3px #888888"
        >
          <Text lineHeight="60px" fontFamily="YuMincho">お問い合わせ</Text>
          <Box
            position='absolute'
            bottom='0'
            content=" "
          >
            <Border
              borderBottom='6px solid'
              borderColor='red'
              w="150px"
            />
          </Box>
        </Button>
      </Flex>
    </Container>
  </Box>
)

Header.propTypes = {
  onSectionActive: PropTypes.func,
};

export default Header;
