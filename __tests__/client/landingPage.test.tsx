/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LandingPage from '../../client/pages/LandingPage';

describe('Unit testing React components', () => {

  describe('LandingPage', () => {
    let landingPage;

    beforeAll(() => {
      landingPage = render(<LandingPage />);
    });

    test('Renders the passed-in text with the label in bold', () => {
      expect(landingPage.getByText('Connect')).toHaveTextContent('Connect');
    });
  });

});