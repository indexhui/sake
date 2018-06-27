import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Text from '../Text';
import BackgroundImage from '../BackgroundImage';
import decoration from './title-decoration.png';

const SectionTitle = ({ children, subtitle, ...props }) => {
  return (
    <Box textAlign="center">
      <Text.h2>
        {children}
      </Text.h2>
      <Text.h4>
        {subtitle}
      </Text.h4>
      <BackgroundImage w="9em" mx="auto" ratio={42 / 103} src={decoration} />
    </Box>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
