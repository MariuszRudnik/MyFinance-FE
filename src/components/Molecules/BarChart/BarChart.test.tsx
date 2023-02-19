import React from 'react';
import { render } from '@testing-library/react';
import { BarChart } from './BarChart';
import { renderWithProvider } from '../../Utils/renderWithProvider';

describe('BarChart', () => {
  const data = [
    { type: 'Expenditure', sum: 100 },
    { type: 'Influence', sum: 200 }
  ];

  it('should render without crashing', () => {
    const { container } = render(<BarChart data={data} />);
    expect(container).toBeInTheDocument();
  });

  it('should render a chart with bars for each data point', () => {
    const { container } = render(<BarChart data={data} />);
    const bars = container.querySelectorAll('.bar');
    expect(bars.length).toBe(data.length);
  });

  it('should render the x-axis and y-axis with correct labels and styling', () => {
    const { container } = render(<BarChart data={data} />);
    const xAxis = container.querySelector('.xAxis');
    const yAxis = container.querySelector('.yAxis');
    expect(xAxis).toHaveTextContent('Type');
    expect(yAxis).toHaveTextContent('Sum');
    expect(xAxis).toHaveStyle('font-size: 16px');
    expect(yAxis).toHaveStyle('font-size: 16px');
    expect(xAxis).toHaveStyle('font-family: Roboto-Regular');
    expect(yAxis).toHaveStyle('font-family: Roboto-Regular');
  });
});
