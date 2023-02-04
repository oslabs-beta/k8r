
/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { testReference } from '../testReference';
import Header from '../../client/components/Header';
describe('Test Header Component', () => {
  describe('Header', () => {
    let header;
    // Create mock function, which should return the boolean input in testing
    const mockSetShowLogoutModal = jest.fn(bool => bool);

    beforeEach(() => {
      header = render(
        <Header
          username={testReference.username}
          photo={testReference.photo}
          showLogoutModal={false}
          setShowLogoutModal={mockSetShowLogoutModal}
        />);
    });
    test('Should display the username.', () => {
      expect(header.getByText(testReference.username)).toBeVisible();
    });
    test('Should display the user\'s photo.', () => {
      expect(header.getByAltText('User Profile')).toBeVisible();
      expect(header.getByAltText('User Profile').src).toContain(testReference.photo);
    });
    test('Should trigger showLogoutModal when username or photo are clicked.', () => {
      const usernameElement = header.getByText(testReference.username);
      const profilePhotoElement = header.getByAltText('User Profile');
      // Simulate clicking the username element and confirm that setShowLogoutModal is called and passed in the argument of true
      fireEvent.click(usernameElement);
      expect(mockSetShowLogoutModal).toHaveBeenCalled();
      expect(mockSetShowLogoutModal.mock.results[0].value).toBe(true);
      // Simulate clicking the profile photo element and confirm that setShowLogoutModal is called and passed in the argument of true
      fireEvent.click(profilePhotoElement);
      expect(mockSetShowLogoutModal).toHaveBeenCalled();
      expect(mockSetShowLogoutModal.mock.results[0].value).toBe(true);
    });
  });
});