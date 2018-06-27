import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { ratio } from 'styled-system';
import styled from 'styled-components';

import Box from './Box';

const BG = styled(Box)`
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: ${({ backgroundSize }) => backgroundSize};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: no-repeat;
  ${ratio}
`;

const BackgroundImage = ({
  src,
  ratio,
  backgroundSize,
  backgroundPosition,
  children,
  height,
  ...props
}) => (
  <Box height={height} {...props}>
    {createElement(BG, {
      src,
      ratio: height ? 0 : ratio,
      backgroundSize,
      backgroundPosition,
      height,
    }, children)}
  </Box>
)

BackgroundImage.propTypes = {
  children: PropTypes.node,
  ratio: PropTypes.number,
  src: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundPosition: PropTypes.string,
};

BackgroundImage.defaultProps = {
  ratio: 1,
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
};

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
