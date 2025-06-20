import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/React Props Working Example/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders footer text', () => {
  render(<App />);
  const footerElement = screen.getByText(/Copyright/i);
  expect(footerElement).toBeInTheDocument();
});
