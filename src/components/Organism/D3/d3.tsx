import React, { useContext, useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSumOperationsMonth } from '../../Utils/featchHelper';
import { theme } from '../../../theme/mainTheme';
import { MainContext, MainProvider } from '../../Context/MainProvider';
import styled from 'styled-components/macro';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import { SelectorsMonthAndYear } from '../../Molecules/SelectorsMonthAndYear/SelectorsMonthAndYear';

interface SumTransactionType {
  type: string;
  sum: number;
}

const D3Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 5px;
`;

const NewParagraph = styled(Paragraph)`
  margin: 2px;
`;

export const D3 = () => {
  const toDay = new Date();
  const { darkOrLight } = useContext(MainContext);
  const { id } = useParams();
  const svgRef = useRef() as any;
  const [month, setMonth] = useState(
    toDay.getMonth() <= 9 ? `0${toDay.getMonth() + 1}` : `${toDay.getMonth() + 1}`
  );
  const [year, setYear] = useState(toDay.getFullYear());
  const { data, isLoading } = useQuery(['sumTransaction', id, month, year], getSumOperationsMonth);

  const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 };
  const WIDTH = 700 - MARGIN.LEFT - MARGIN.RIGHT;
  const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM;

  useEffect(() => {
    const svg = d3
      .select(svgRef.current as any)
      .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .style('background', darkOrLight.value == 'light' ? theme.secondary : 'rgb(31,38,55)')
      .append('g')
      .attr('transform', `translate(${MARGIN.LEFT},${MARGIN.TOP} )`);
    const yAxisGroup = svg.append('g');
    const rr = () => {
      const max: any = d3.max(data.data, (d: SumTransactionType) => {
        return d.sum;
      });
      const min: any = d3.min(data.data, (d: SumTransactionType) => d.sum);
      const y = d3
        .scaleLinear()
        .domain([min * 0.95, max])
        .range([HEIGHT, 0]);
      const yAxisCall = d3.axisLeft(y);
      yAxisGroup.transition().duration(500).call(yAxisCall);
    };
    if (!isLoading) {
      const max: any = d3.max(data.data, (d: SumTransactionType) => {
        return d.sum;
      });
      const min: any = d3.min(data.data, (d: SumTransactionType) => d.sum);

      const y = d3
        .scaleLinear()
        .domain([min * 0.95, max])
        .range([HEIGHT, 0]);

      const x = d3
        .scaleBand()
        .domain(data.data.map((d: SumTransactionType) => d.type))
        .range([0, WIDTH])
        .padding(0.3);

      svg.append('g').attr('transform', `translate(0,${HEIGHT})`).call(d3.axisBottom(x));
      const rects = svg.selectAll('rect').data(data.data);

      (() => {
        const yAxisCall: any = d3.axisLeft(y);

        yAxisGroup.call(yAxisCall);
      })();

      rects
        .append('rect')
        .transition()
        .duration(500)
        .attr('x', (d: any, i): any => x(d.type))
        .attr('y', (d: any) => y(d.sum))
        .attr('width', x.bandwidth)
        .attr('height', (d: any) => HEIGHT - y(d.sum));

      // end
      rects.exit().transition().duration(500).attr('height', 0).attr('y', HEIGHT).remove();

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
  }, [data, darkOrLight, !isLoading]);

  return (
    <>
      <div className="container">
        <D3Wrapper>
          <NewParagraph>The chart compares expenses and revenues for a given month.</NewParagraph>
          {isLoading ? null : data.data[0].sum >= data.data[1].sum ? (
            <NewParagraph>Congratulations, you have more income than expenses :)</NewParagraph>
          ) : (
            <NewParagraph>You should start saving.</NewParagraph>
          )}
          <svg ref={svgRef}> </svg>
          <SearchWrapper>
            {!isLoading ? (
              <SelectorsMonthAndYear
                theNewDate={data.theNewDate}
                theOldestDate={data.theOldestDate}
                setMonth={setMonth}
                setYear={setYear}
              />
            ) : null}
          </SearchWrapper>
        </D3Wrapper>
      </div>
    </>
  );
};
