import React, { useContext, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { theme } from '../../../theme/mainTheme';
import { MainContext } from '../../Context/MainProvider';

interface Data {
  type: string;
  sum: number;
}

interface Props {
  data: Data[];
}

export const BarChart: React.FC<Props> = ({ data }) => {
  const { darkOrLight } = useContext(MainContext);
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const svg = d3
      .select(chartRef.current)
      .style('background', darkOrLight.value == 'light' ? theme.secondary : 'rgb(31,38,55)');
    svg.selectAll('*').remove();

    const width = +svg.attr('width')!;
    const height = +svg.attr('height')!;

    const margin = { top: 20, right: 20, bottom: 30, left: 100 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const xScale = d3
      .scaleBand()
      .range([0, chartWidth])
      .padding(0.1)
      .domain(data.map((d) => d.type));

    const yScale = d3
      .scaleLinear()
      .range([chartHeight, 0])
      .domain([0, d3.max(data, (d) => d.sum)!]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${height - margin.bottom})`)
      .call(xAxis);

    svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`).call(yAxis);

    svg
      .select('.domain')
      .attr('stroke', darkOrLight.value == 'light' ? theme.colorDark1 : theme.textColor);
    svg
      .selectAll('.tick line')
      .attr('stroke', darkOrLight.value == 'light' ? theme.colorDark1 : theme.textColor);
    svg
      .selectAll('.tick text')
      .attr('fill', darkOrLight.value == 'light' ? theme.colorDark1 : theme.textColor)
      .attr('font-family', 'Roboto-Regular')

      .attr('font-size', '16px');

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.type)! + margin.left)
      .attr('y', chartHeight + margin.top)
      .attr('width', xScale.bandwidth())
      .attr('height', 0)
      .attr('fill', (d: any) => {
        if (d.type == 'Expenditure') {
          return theme.quaternary;
        } else if (d.type == 'Influence') {
          return theme.approve;
        } else {
          return theme.error;
        }
      })
      .transition()
      .duration(500)
      .attr('y', (d) => yScale(d.sum)! + margin.top)
      .attr('height', (d) => chartHeight - yScale(d.sum)!);
  }, [data, darkOrLight]);

  return <svg ref={chartRef} width="400" height="300" />;
};
