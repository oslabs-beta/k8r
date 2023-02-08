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

    beforeEach(() => {
      landingPage = render(<LandingPage />);
    });

    test('Should render the K8R logo image', () => {
      expect(landingPage.getByAltText('K8R Logo - A robot butler holds the K8R logo on a silver platter.')).toBeVisible();
    });
    test('Should render the Sign in with Google button.', () => {
      expect(landingPage.getByAltText('Google Sign In Button')).toBeVisible();
    });
    test('Should render the username input correctly.', () => {
      expect(landingPage.getByPlaceholderText('username')).toBeVisible();
    });
    test('Should render the password input correctly.', () => {
      expect(landingPage.getByPlaceholderText('password')).toBeVisible();
    });
    test('Should render the connect button with the correct text.', () => {
      expect(landingPage.getByRole('button', { name: 'Connect' })).toBeVisible();
      expect(landingPage.getByRole('button', { name: 'Connect' })).toHaveTextContent('Connect');
    });
  });
});