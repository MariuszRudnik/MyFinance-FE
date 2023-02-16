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
import { BarChart } from '../../Molecules/BarChart/BarChart';

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
`;

const NewParagraph = styled(Paragraph)`
  margin: 2px;
`;

export const ChartModule = () => {
  const toDay = new Date();
  const { id } = useParams();
  const [month, setMonth] = useState(toDay.getMonth() + 1);
  const [year, setYear] = useState(toDay.getFullYear());
  const { data, isLoading } = useQuery(['sumTransaction', id, month, year], getSumOperationsMonth);

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
          {!isLoading ? <BarChart data={data.data} /> : null}
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
