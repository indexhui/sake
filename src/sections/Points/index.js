import React from 'react';

import Box from '../../components/Box';
import Border from '../../components/Border';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import BackgroundImage from '../../components/BackgroundImage';

import flag1 from './flag1.svg';
import flag2 from './flag2.svg';
import flag3 from './flag3.svg';

const Points = () => {
  return (
    <Box my="4em">
      <SectionTitle subtitle="POINT">
        ポイント
      </SectionTitle>
      <Box
      >
        <BackgroundImage
          src={flag1}
          ratio={47 / 645}
          w={['320px',null, '645px']}
          mx="auto"
          my="1em"
        />
        <BackgroundImage
          src={flag2}
          ratio={47 / 545}
          w={['264px',null, '545px']}
          mx="auto"
          my="1em"
        />
        <BackgroundImage
          src={flag3}
          ratio={47 / 938}
          w={['439px',null, '938px']}
          mx="auto"
          my="1em"
        />
      </Box>
      <Container>
        <Border
          borderBottom='1px solid'
          borderColor='red'
          w="100%"
          height="2px"
          mx="auto"
        />
        <Border
          borderBottom='1px solid'
          borderColor='red'
          w="100%"
          height="10px"
          mx="auto"
        />
      </Container>
    </Box>
  );
};

export default Points;
