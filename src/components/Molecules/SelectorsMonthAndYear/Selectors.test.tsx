import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SelectorsMonthAndYear } from './SelectorsMonthAndYear';

describe('Selectors', () => {
  test('renders year and month selectors', () => {
    render(<SelectorsMonthAndYear />);
    const yearSelector = screen.getByLabelText('Select year:');
    const monthSelector = screen.getByLabelText('Select month:');
    expect(yearSelector).toBeInTheDocument();
    expect(monthSelector).toBeInTheDocument();
  });

  test('selects current month and year by default', () => {
    render(<SelectorsMonthAndYear />);
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const yearSelector = screen.getByLabelText('Select year:');
    const monthSelector = screen.getByLabelText('Select month:');
    expect(yearSelector).toHaveValue(currentYear.toString());
    expect(monthSelector).toHaveValue(currentMonth.toString());
  });

  test('logs selected date when button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<SelectorsMonthAndYear />);
    const yearSelector = screen.getByLabelText('Select year:');
    const monthSelector = screen.getByLabelText('Select month:');
    const logButton = screen.getByRole('button', { name: 'Log selected date' });
    fireEvent.change(yearSelector, { target: { value: '2022' } });
    fireEvent.change(monthSelector, { target: { value: '3' } });
    fireEvent.click(logButton);
    expect(consoleSpy).toHaveBeenCalledWith(new Date(2022, 3));
    consoleSpy.mockRestore();
  });

  test('disables years before 2020 and after 2023', () => {
    render(<SelectorsMonthAndYear />);
    const yearSelector = screen.getByTestId('year-select');
    expect(yearSelector.children[0]).not.toBeDisabled(); // first option should not be disabled
    expect(yearSelector.children[1]).not.toBeDisabled(); // 2019 should not be disabled
    expect(yearSelector.children[2]).not.toBeDisabled(); // 2020 should not be disabled
    expect(yearSelector.children[3]).not.toBeDisabled(); // 2021 should not be disabled
  });
});
