/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LandingPage from '../../client/pages/LandingPage';

describe('Test Landing Page Component', () => {

  describe('LandingPage', () => {
    let landingPage;

    beforeAll(() => {
      landingPage = render(<LandingPage />);
    });

    test('Renders the connect button.', () => {
      expect(landingPage.getByRole('button', { name: 'Connect' })).toBeVisible();
    });
  });

});