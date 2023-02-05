/**
 * @jest-environment jsdom
 */

// @ts-nocheck

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../../client/components/NavBar';
import Home from '../../client/Home'
import { testReference } from '../testReference';


describe('NavBar', () => {
  let navBar;

  // Create mock functions for the functions that are passed through as props
  const mockSetCurrentProfileId = jest.fn(id => id);
  const mockSetClustersFetched = jest.fn(bool => bool);
  const mockShowclusterEditor = jest.fn(bool => bool);
  const mockSetShowclusterEditor = jest.fn(bool => bool);
  const mockSetShowLogoutModal = jest.fn(bool => bool);

  // Mock all fetch calls
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );
  beforeAll(() => jest.spyOn(window, 'fetch'))
  beforeEach(() => global.fetch.mockImplementation);

  beforeEach(() => {
    navBar = render(
      <BrowserRouter>
        <NavBar
          setCurrentProfileId={mockSetCurrentProfileId}
          setClustersFetched={mockSetClustersFetched}
          showclusterEditor={mockShowclusterEditor}
          setShowclusterEditor={mockSetShowclusterEditor}
          setShowLogoutModal={mockSetShowLogoutModal}
          clusters={[]}
        />
        <Routes>
          <Route path="/" element={<Home username={testReference.username} photo={testReference.photo} />} />
          <Route path="/home" element={<Home username={testReference.username} photo={testReference.photo} />} />
        </Routes>
      </BrowserRouter>
    );
  });
  test('TODO: navBar testing.', () => {
    expect(true).toBe(true);
  });
});