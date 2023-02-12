import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getOperationsMonth, getSumOperationsMonth } from '../../Utils/featchHelper';
import { theme } from '../../../theme/mainTheme';

interface SumTransactionType {
  type: string;
  sum: number;
}

export const D3 = () => {
  const array = [{ type: 'string', sum: 0 }];
  const { id } = useParams();
  const svgRef = useRef() as any;
  const [month, setMont] = useState('02');
  const [year, setYear] = useState(2023);
  const { data, isLoading } = useQuery(['sumTransaction', id, month, year], getSumOperationsMonth);

  const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 };
  const WIDTH = 700 - MARGIN.LEFT - MARGIN.RIGHT;
  const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM;

  useEffect(() => {
    const svg = d3
      .select(svgRef.current as any)
      .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .style('background', theme.secondary)
      .append('g')
      .attr('transform', `translate(${MARGIN.LEFT},${MARGIN.TOP} )`);

    if (!isLoading) {
      const max: any = d3.max(data, (d: SumTransactionType) => {
        return d.sum;
      });
      const min: any = d3.min(data, (d: SumTransactionType) => d.sum);
      const y = d3
        .scaleLinear()
        .domain([min * 0.95, max])
        .range([HEIGHT, 0]);

      const x = d3
        .scaleBand()
        .domain(data.map((d: SumTransactionType) => d.type))
        .range([0, WIDTH])
        .padding(0.3);

      svg.append('g').attr('transform', `translate(0,${HEIGHT})`).call(d3.axisBottom(x));

      svg.append('g').call(d3.axisLeft(y));

      const rects = svg.selectAll('rect').data(data);

      rects.exit().transition().duration(500).attr('height', 0).attr('y', HEIGHT).remove();

      rects
        .append('rect')
        .transition()
        .duration(500)
        .attr('x', (d: any, i): any => x(d.type))
        .attr('y', (d: any) => y(d.sum))
        .attr('width', x.bandwidth)
        .attr('height', (d: any) => HEIGHT - y(d.sum));

      // end
      rects
        .enter()
        .append('rect')
        .attr('x', (d: any, i): any => x(d.type))
        .attr('width', x.bandwidth)
        .attr('fill', (d: any) => {
          if (d.type == 'Expenditure') {
            return theme.quaternary;
          } else if (d.type == 'Influence') {
            return theme.approve;
          } else {
            return theme.error;
          }
        })
        .attr('y', HEIGHT)
        .transition()
        .duration(500)
        .attr('height', (d: any) => HEIGHT - y(d.sum))
        .attr('y', (d: any) => y(d.sum));
    }
  }, [data]);

  return (
    <>
      <div className="container">
        <div className="row">
          <svg ref={svgRef}> </svg>
        </div>
      </div>
    </>
  );
};
