import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: any) => setInputValue(e.target.value);

  return (
    <>
      <input
        value={inputValue}
        onChange={handleInputChange}
        name="Name"
        id="name"
        placeholder="Enter your name"
      />
      <button disabled={!inputValue}>Submit</button>
    </>
  );
};

describe('Input With Button', () => {
  it('should renders the component', () => {
    render(<InputWithButton />);
    screen.getByText('Submit');
  });
  it('should properly handles value change', () => {
    render(<InputWithButton />);
    const input = screen.getByPlaceholderText('Enter your name');
    const button = screen.getByText('Submit');
    expect(button).toBeDefined();
    fireEvent.change(input, { target: { value: 'Mariusz' } });
    expect(input).toHaveValue('Mariusz');
    expect(button).toBeDefined();
  });
});
