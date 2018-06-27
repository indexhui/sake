import React from 'react';

import Box from '../../components/Box';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import Text from '../../components/Text';
import Border from '../../components/Border';

const Concept = () => {
  return (
    <Container my="4em" textAlign="center" px={['2.5em',null, null]}>
      <SectionTitle subtitle="CONCEPT">
        サービス背景
      </SectionTitle>
      <Box my={['1em','1em', '2em']}>
        <Text>中国にてお酒を輸入する場合、</Text>
        <Text lineHeight={['1.5','1.5', '2']}>①
          <Text.span textDecoration="underline">
            輸入社が酒類輸入貿易、販売ライセンスを保有
          </Text.span>
          していなければなりません。また、
        </Text>
        <Text lineHeight={['1.5','1.5', '2']}>②
          <Text.span textDecoration="underline">
          商品毎に中国検験認証集団有限公司（CCIC）へのラベル登録
          </Text.span>
          、
        </Text>
        <Text lineHeight={['1.5','1.5', '2']}>③
          <Text.span textDecoration="underline">
            輸入での検
          </Text.span>
          が必要となります。
        </Text>
        <Text>※香港でも輸入社がライセンスを保有している必要があります。</Text>
      </Box>
      <Border
        borderBottom='1px solid'
        borderColor='red'
        w="20px"
        height="2px"
        mx="auto"
      />
      <Box my={['1em','1em', '2em']}>
        <Text lineHeight={['1.5','1.5', '2']}>現在、日本酒をはじめとする日本のアルコール製品の人気・ブームが中国、香港に到来。</Text>
        <Text lineHeight={['1.5','1.5', '2']}>多くのバイヤー、サプライヤーが、日中、日港間をつなげようと、活発な動きを見せています。</Text>
      </Box>
      <Border
        borderBottom='1px solid'
        borderColor='red'
        w="20px"
        height="2px"
        mx="auto"
      />
      <Box my={['1em','1em', '2em']}>
        <Text lineHeight={['1.5','1.5', '2']}>ただ、残念ながら展示会に出ようにも、中国側の輸入社が未定の場合や、</Text>
        <Text lineHeight={['1.5','1.5', '2']}>ライセンス未取得の場合も多く、お酒が現地で通関トラブルが多く発生しております。</Text>
      </Box>
      <Border
        borderBottom='1px solid'
        borderColor='red'
        w="20px"
        height="2px"
        mx="auto"
      />
      <Box my={['1em','1em', '2em']}>
        <Text lineHeight={['1.5','1.5', '2']}>そこで、この度、中国展開を検討されている企業様、酒蔵様へ向け、より現地での通関がスムースに行くよう、
</Text>
        <Text lineHeight={['1.5','1.5', '2']}>販売・プロモーションに専念していただけるよう、通関にまつわるライセンスのサポートを開始させていただくことになりました。 </Text>
      </Box>
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
  );
};

export default Concept;
