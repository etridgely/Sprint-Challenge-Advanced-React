import React from 'react';
import { render } from "@testing-library/react";
import 'jest-dom/extend-expect';
import App from './App';

test('renders without crashing', () => {
  const container = render(<App />);
  console.log(container);
});

test('verify navBar is present', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/navBar/i);
});
