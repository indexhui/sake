import React from 'react';

import Container from '../../components/Container';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import SectionTitle from '../../components/SectionTitle';
import BackgroundImage from '../../components/BackgroundImage';
import Border from '../../components/Border';
import Text from '../../components/Text';

import plane from './plane.png';
import proxy from './proxy.png';
import warehouse from './warehouse.png';

const contents = [
  {
    bg: plane,
    title: '製品の輸入登録サービス',
    text1: `弊社にて、製品のCCIC（中国検験認証集団有限公司）
    への製品登録、中国でのラベルの作成をサポートいたします。`,
    text2: [
      '※　スケジュール︓申請～２週間程度。',
      '※　注意点 : 製品を登録する際、ブランド授権書',
      '（その銘柄から中国での販売を委託された証明）',
      'が必要となることがございます。',
    ],
  },
  {
    bg: proxy,
    title: '輸入社代行サービス',
    text1: `弊社、もしくはパートナー会社が、中国（上海）・香港での
    貴社貨物の輸入社として、通関の代行手続きを行います。`,
    text2: [
      '※　注意点 : 中国での国家規定により、',
      '商品代金の海外送金は、国際決済が必須です。',
      '国際送金振込手数料が発生いたします。',
    ],
  },
  {
    bg: warehouse,
    title: '国際輸送・倉庫サービス',
    text1: `集荷～配送（国際輸送）、現地での低温保管（20度前後）、
    保税管理 、現地での小口配送までトータルでお任せください。`,
    text2: [
      '※　保税管理',
      '（上海一般区︓20,000 平米/外高橋保税区︓3,000平米）',
    ],
  }
];

const Service = () => (
  <Container my="4em">
    <SectionTitle subtitle="SERVICE">
      サービス概要
    </SectionTitle>
    <Flex
      my="2em"
      flexDirection={['column', 'column', 'row']}
    >
      {contents.map((content, index) => (
        <Box
          key={index}
          px="1em"
          w={[1, 1, 1 / 3]}
          my="1em"
        >
          <Box border="1px solid black" w={1} pb="80%" position="relative">
            <Box
              position="absolute"
              content=" "
              top="0"
              bottom="0"
              left="0"
              right="0"
            >
              <BackgroundImage
                src={content.bg}
                width={1}
                ratio={15 / 33}
              >
                <Flex
                  position="absolute"
                  content=" "
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  justifyContent='center'
                  align="center"
                >
                  <Box px="1em">
                    <Text color="white" fontSize="1.5em">{content.title}</Text>
                    <Border
                      borderBottom='2px solid'
                      borderColor='red'
                      w="100px"
                      mx="auto"
                      height="10px"
                    />
                    <Text color="white" fontSize="0.75em">
                      {content.text1}
                    </Text>
                  </Box>
                </Flex>
              </BackgroundImage>
              <Box pb="35%"  position="relative">
                <Flex
                  position="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  justifyContent="center"
                  align="center"
                >
                  <Text px="1em" fontSize=".75em">
                    {content.text2.reduce((all, t, index) => {
                      if (index === 0) return [t];
                      return [...all, <br key={index} />, t];
                    })}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
    <Border
      borderBottom="1px solid"
      borderColor="red"
      height="2px"
      mx="auto"
    />
    <Border
      borderBottom="1px solid"
      borderColor="red"
      height="10px"
      mx="auto"
    />
  </Container>
);

export default Service;
