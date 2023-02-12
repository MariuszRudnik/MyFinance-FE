import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getOperationsMonth, getSumOperationsMonth } from '../../Utils/featchHelper';
import { theme } from '../../../theme/mainTheme';

export const D3 = () => {
  const { id } = useParams();
  const svgRef = useRef() as any;
  const [month, setMont] = useState('01');
  const [year, setYear] = useState(2023);
  const { data } = useQuery(['sumTransaction', id, month, year], getSumOperationsMonth);
  console.log(data);

  const [data2] = useState([1, 50, 35, 15, 194]);

  const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 50, RIGHT: 10 };
  const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
  const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

  useEffect(() => {
    const svg = d3
      .select(svgRef.current as any)
      .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .style('background', theme.secondary)
      .append('g')
      .attr('transform', `translate(${MARGIN.LEFT},${MARGIN.TOP} )`);

    d3.json('https://udemy-react-d3.firebaseio.com/tallest_men.json').then((agesData: any) => {
      const max: any = d3.max(agesData, (d: any) => {
        return d.height;
      });
      const min: any = d3.min(agesData, (d: any) => d.height);
      const y = d3
        .scaleLinear()
        .domain([min * 0.95, max])
        .range([HEIGHT, 0]);

      const x = d3
        .scaleBand()
        .domain(agesData.map((d: any) => d.name))
        .range([0, WIDTH])
        .padding(0.3);
      svg
        .append('g')
        .attr('transform', `translate(0,${HEIGHT})`)
        .call(d3.axisBottom(x)); /*  dodaje opsi */

      svg.append('g').call(d3.axisLeft(y));

      const rects = svg.selectAll('rect').data(agesData);

      rects.exit().transition().duration(500).attr('height', 0).attr('y', HEIGHT).remove();

      rects
        .append('rect')
        .transition()
        .duration(500)
        .attr('x', (d: any, i): any => x(d.name))
        .attr('y', (d: any) => y(d.height))
        .attr('width', x.bandwidth)
        .attr('height', (d: any) => HEIGHT - y(d.height));

      // end
      rects
        .enter()
        .append('rect')
        .attr('x', (d: any, i): any => x(d.name))
        .attr('width', x.bandwidth)
        .attr('fill', 'gray')
        .attr('y', HEIGHT)
        .transition()
        .duration(500)
        .attr('height', (d: any) => HEIGHT - y(d.height))
        .attr('y', (d: any) => y(d.height));
    });
  }, [data2]);

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
