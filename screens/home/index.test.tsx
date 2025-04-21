import React from "react";
import { render, screen } from '@testing-library/react-native';
import '@testing-library/jest-dom';
import { Multiply } from ".";

describe('Multiply component', () => {
  test('renders the product of A and B', () => {
    render(<Multiply a={10} b={10} />);
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  test('returns 0 when multiplying by 0', () => {
    render(<Multiply a={10} b={0} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('handles negative numbers', () => {
    render(<Multiply a={-5} b={3} />);
    expect(screen.getByText('-15')).toBeInTheDocument();
  });
});