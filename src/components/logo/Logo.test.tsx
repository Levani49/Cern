import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import Logo from './Logo.component';

describe('Logo component', () => {
  test('renders without crashing!', () => {
    render(<Logo />);
  });

  test('displays the logo image with correct alt attribute', () => {
    render(<Logo />);
    const logoImage = screen.getByAltText('tracer logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/assets/tracer-logo.png');
  });
});
