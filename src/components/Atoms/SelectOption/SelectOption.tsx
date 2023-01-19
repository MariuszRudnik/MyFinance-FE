import styled from 'styled-components';

export const SelectOption = styled.select`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  border-radius: 50px;
  margin: 5px;
`;
