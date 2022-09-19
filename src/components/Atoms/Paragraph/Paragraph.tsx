import styled from 'styled-components';
import { theme } from '../../../theme/mainTheme';

type Props = {
  color?: string;
  fontWeight?: string;
};

const Paragraph = styled.p<Props>`
  font-family: 'Roboto-Regular', 'Roboto-Bold', 'Roboto-Italic', 'Roboto-Light', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : theme.bold)};
  color: ${({ color }) => (color ? color : theme.gray400)};
  word-wrap: break-word;
`;

export default Paragraph;
