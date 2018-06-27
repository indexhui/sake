import React from 'react';

import Container from '../../components/Container';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Border from '../../components/Border';
import SectionTitle from '../../components/SectionTitle';

const Profile = () => {
  return (
    <Box my="2em">
      <Container>
      <SectionTitle subtitle="COMPANY　PROFILE">
        会社概要
      </SectionTitle>
        <Box>
          <Text textAlign="center" fontSize="1.25em">株式会社みかん箱</Text>
          <Text textAlign="center" fontSize="1em">
            〒103-0013<br/>
            東京都中央区日本橋人形町2-29-9 ひまわりビル5F<br/>
            電話番号︓03-6264-8972<br/>
            代表者 : 桧田 渉<br/>
            設立 : 2008年<br/>
            事業︓国際輸送取事業、第二種利用貨物運送業 他
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
