import React, { PureComponent, createElement } from 'react';

import { Element } from 'react-scroll';

import Box from '../components/Box';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Concept from '../sections/Concept';
import Service from '../sections/Service';
import Flow from '../sections/Flow';
import Points from '../sections/Points';
import Price from '../sections/Price';
import Profile from '../sections/Profile';
import sections from '../sections';

const sectionElemets = {
  concept: Concept,
  service: Service,
  flow: Flow,
  point: Points,
  price: Price,
  profile: Profile,
};

class Index extends PureComponent {
  state = {
    showHeader: false,
    activeSection: 'hero',
  }

  handleSectionActive = (name) => {
    const newState = {
      activeSection: name,
    };
    if (this.state.activeSection === 'hero' && name !== 'hero') {
      newState.showHeader = true;
    }
    if (this.state.activeSection !== 'hero' && name === 'hero') {
      newState.showHeader = false;
    }
    this.setState(newState);
  }

  render() {
    const { showHeader } = this.state;
    return (
      <Box height="100%">
        <Box
          position="fixed"
          zIndex={99}
          left="0"
          right="0"
          top="0"
          opacity={showHeader ? 1 : 0}
          transform={`translateY(${showHeader ? '0' : '-100%'})`}
          transition="all 500ms ease"
        >
          <Header onSectionActive={this.handleSectionActive} />
        </Box>
        <Element style={{ height: '100%' }} name="hero">
          <Hero />
        </Element>
        {sections.map((section) => (
          <Element key={section.slug} name={section.slug}>
            {createElement(sectionElemets[section.slug] || 'div')}
          </Element>
        ))}
      </Box>
    );
  }
}


export default Index;
