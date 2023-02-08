/**
 * @jest-environment jsdom
 */

// @ts-nocheck

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClusterEditor from '../../client/components/ClusterEditor';
describe('Test Cluster Editor Component', () => {
  describe('Cluster Editor', () => {
    let clusterEditor;

    // Create mock functions, which should return the boolean input in testing
    const mockSetClustersFetched = jest.fn(bool => bool);
    const mockSetShowclusterEditor = jest.fn(bool => bool);

    // Mock all fetch calls
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
    beforeAll(() => jest.spyOn(window, 'fetch'))
    beforeEach(() => global.fetch.mockImplementation);

    beforeEach(() => {
      clusterEditor = render(
        <ClusterEditor
          setClustersFetched={mockSetClustersFetched}
          setShowclusterEditor={mockSetShowclusterEditor}
          clusters={[]}
        />);
    });
    test('Should render the cluster name text input.', () => {
      expect(clusterEditor.getByPlaceholderText('Cluster Name...')).toBeVisible();
    });
    test('Should render the cluster URL text input.', () => {
      expect(clusterEditor.getByPlaceholderText('Cluster URL...')).toBeVisible();
    });
    test('Should render the submit button.', () => {
      expect(clusterEditor.getByText('Submit')).toBeVisible();
    });
    test('Should render the cancel button.', () => {
      expect(clusterEditor.getByText('Cancel')).toBeVisible();
    });
    test('Should change setShowclusterEditor to false when submitting.', () => {
      const cancelButton = clusterEditor.getByText('Cancel')
      fireEvent.click(cancelButton);
      expect(mockSetShowclusterEditor).toHaveBeenCalled();
      expect(mockSetShowclusterEditor.mock.results[0].value).toBe(false);
    });
  });
});