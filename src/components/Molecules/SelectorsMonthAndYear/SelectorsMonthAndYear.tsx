import React, { useState } from 'react';
import Button from '../../Atoms/Button/Button';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import styled from 'styled-components/macro';
import { theme } from '../../../theme/mainTheme';

const Selected = styled.select`
  padding: 5px 20px;
  font-size: 16px;
  border: none;
  background-color: ${theme.tertiary};
  border-radius: 50px;
  margin: 5px;
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  margin: 5px 0 15px 0;
`;

export const SelectorsMonthAndYear = ({ theNewDate, theOldestDate, setMonth, setYear }: any) => {
  const oldestDate = new Date(theOldestDate);
  const newDay = new Date(theNewDate);
  const min = new Date(oldestDate.getFullYear(), oldestDate.getMonth() - 1, 1);
  const max = new Date(newDay.getFullYear(), newDay.getMonth(), 30);

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleClick = () => {
    setMonth(selectedMonth + 1);
    setYear(selectedYear);
    console.log(selectedYear, selectedMonth + 1);
  };

  const years = [];
  for (let year = max.getFullYear(); year >= min.getFullYear(); year--) {
    years.push(year);
  }

  const months = [
    { value: 0, label: 'January' },
    { value: 1, label: 'February' },
    { value: 2, label: 'March' },
    { value: 3, label: 'April' },
    { value: 4, label: 'May' },
    { value: 5, label: 'June' },
    { value: 6, label: 'July' },
    { value: 7, label: 'August' },
    { value: 8, label: 'September' },
    { value: 9, label: 'October' },
    { value: 10, label: 'November' },
    { value: 11, label: 'December' }
  ];

  return (
    <SearchWrapper>
      <Paragraph>You select the year and month that give you want to check.</Paragraph>
      <Wrapper>
        <Selected id="year-select" value={selectedYear} onChange={handleYearChange}>
          {years.map((year) => (
            <option
              key={year}
              value={year}
              disabled={
                new Date(year, selectedMonth) < min || new Date(year, selectedMonth, 31) > max
              }>
              {year}
            </option>
          ))}
        </Selected>

        <Selected id="month-select" value={selectedMonth} onChange={handleMonthChange}>
          {months.map((month) => (
            <option
              key={month.value}
              value={month.value}
              disabled={
                new Date(selectedYear, month.value) < min ||
                new Date(selectedYear, month.value) > max
              }>
              {month.label}
            </option>
          ))}
        </Selected>

        <Button secondary={true} onClick={handleClick}>
          Search
        </Button>
      </Wrapper>
    </SearchWrapper>
  );
};
