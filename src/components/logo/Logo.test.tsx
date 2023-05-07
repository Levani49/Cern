import { render } from '@testing-library/react';
import { test } from 'vitest';
import Logo from './Logo.component';

describe('Logo component', () => {
  test('renders without crashing!', () => {
    render(<Logo />);
  });
});
