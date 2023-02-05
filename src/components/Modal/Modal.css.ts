import styled from 'styled-components/macro';
import { theme } from '../../theme/mainTheme';

export const Wrapper = styled.aside`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
export const Content = styled.div`
  background: #fff;
  position: absolute;
  margin: auto;
  min-width: 35%;
  box-shadow: ${`0 5px 10px 2px ${theme.shadow}`};
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled.div`
  position: absolute;
  padding: 10px;
  right: 7px;
  top: 5px;
  cursor: pointer;
  font-size: 20px;
`;
