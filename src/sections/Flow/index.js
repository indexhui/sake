import React from 'react';

import Box from '../../components/Box';
import Container from '../../components/Container';
import BackgroundImage from '../../components/BackgroundImage';
import Border from '../../components/Border';
import Flex from '../../components/Flex';
import SectionTitle from '../../components/SectionTitle';
import Text from '../../components/Text';

import flow1 from './flow1.svg';

const Flow = () => {
  return (
    <Box my="4em">
      <SectionTitle subtitle="FLOW">
        サービス流れ
      </SectionTitle>
      <Container maxWidth="1280px">
        <Flex>
          <Box
            px="1.5em"
            w={1/5}
          >
            <BackgroundImage
              src={flow1}
              width={1}
              ratio={10 / 10}
           />
            <Text textAlign="center">
              ・申込用紙記入<br/>
              ・輸入必要書類準備
            </Text>
          </Box>
          <Box
            px="1.5em"
            w={1/5}
          >
            <BackgroundImage
              src={flow1}
              width={1}
              ratio={10 / 10}
           />
            <Text textAlign="center">
              ・申込用紙記入<br/>
              ・輸入必要書類準備
            </Text>
          </Box>
          <Box
            px="1.5em"
            w={1/5}
          >
            <BackgroundImage
              src={flow1}
              width={1}
              ratio={10 / 10}
           />
            <Text textAlign="center">
              ・申込用紙記入<br/>
              ・輸入必要書類準備
            </Text>
          </Box>
          <Box
            px="1.5em"
            w={1/5}
          >
            <BackgroundImage
              src={flow1}
              width={1}
              ratio={10 / 10}
           />
            <Text textAlign="center">
              ・申込用紙記入<br/>
              ・輸入必要書類準備
            </Text>
          </Box>
          <Box
            px="1.5em"
            w={1/5}
          >
            <BackgroundImage
              src={flow1}
              width={1}
              ratio={10 / 10}
           />
            <Text textAlign="center">
              ・申込用紙記入<br/>
              ・輸入必要書類準備
            </Text>
          </Box>
        </Flex>
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

export default Flow;
