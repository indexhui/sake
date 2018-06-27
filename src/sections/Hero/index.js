import React from 'react';
import { Link } from 'react-scroll';

import Box from '../../components/Box';
import BackgroundImage from '../../components/BackgroundImage';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Border from '../../components/Border';
import Button from '../../components/Button';
import Slick from '../../components/Slick';

import Header from '../Header';

import Card from './Card';
import BottleCard from './BottleCard';

import titleText from './h1.svg';
import heroImage from './sake.jpg';
import arrow from './arrow.svg';

const titles = [
  `中国・香港での
酒類・アルコール
輸入社代行`,
  `中国での
酒類・アルコール
の輸入製品登録`,
  '国際輸送',
  '低温保管',
  '小口配送',
];

const Hero = () => (
  <BackgroundImage height="100%" src={heroImage}>
    <Container>
      <BackgroundImage
        mx={[0, null, '5%']}
        py="15%"
        src={titleText}
        ratio={223.13 / 874}
      />
    </Container>
    <Header display={['none','none','none','block']} />
    <Box
      bg="white"
    >
      <Container maxWidth="1200px" pt="1em">
        <Flex
          justifyContent='center'
          align='center'
        >
          <Border
            borderBottom='1px solid'
            borderColor='red'
            w={ 1/12 }
          />
          <Text w={ 10/12 } px="2em" py=".8em">
            中国新ビジネス展開時の商談会、展示会、小売販売、卸売り販売・試飲会を検討されている方へ。
          </Text>
          <Border
            borderBottom='1px solid'
            borderColor='red'
            w={ 1/12 }
          />
        </Flex>
      </Container>
      <Container pb="2em" maxWidth="1200px" display={['none','none','none','block']}>
        <Flex
          justifyContent='center'
          align='center'
        >
          {titles.map((t, index) => (
            <Card w={1 / 5} key={index}>
              {t}
            </Card>
          ))}
        </Flex>
      </Container>
    </Box>
    <Box bg="white" pb="3em">
      <Slick>
        {titles.map((t, index) => (
          <BottleCard key={index}>
            {t}
          </BottleCard>
        ))}
      </Slick>
    </Box>
    <Container mt="2em">
      <Flex justifyContent='center'>
        <Button
          is={Link}
          spy
          smooth
          offset={-120}
          to="concept"
          margin="0 auto"
          bg="none"
          hoverBg="none"
        >
          <BackgroundImage
            src={arrow}
            width="50px"
            ratio={31 / 50}
          />
        </Button>
      </Flex>
    </Container>
  </BackgroundImage>
);

Hero.propTypes = {

};

export default Hero;
