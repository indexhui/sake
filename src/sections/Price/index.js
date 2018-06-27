import React from 'react';

import Box from '../../components/Box';
import Container from '../../components/Container';
import Border from '../../components/Border';
import Text from '../../components/Text';

import SectionTitle from '../../components/SectionTitle';

const Price = () => {
  return (
    <Box my="2em">
      <SectionTitle subtitle="PRICE">
        サービス背景
      </SectionTitle>
      <Text fontSize="2em" textAlign="center">COMING SOON</Text>
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

export default Price;
