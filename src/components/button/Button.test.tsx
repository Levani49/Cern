import { render, screen } from '@testing-library/react';
import Button from './Button.component';

describe('Button component', () => {
  test('renders with children', () => {
    const buttonText = 'Click me!';
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});
