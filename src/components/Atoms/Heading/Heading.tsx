import styled from 'styled-components';

type Props = {
  big?: string;
  color?: string;
};

const Heading = styled.h1<Props>`
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: ${({ theme, big }) => (big ? big : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ color }) => (color ? color : 'black')};
`;

export default Heading;
