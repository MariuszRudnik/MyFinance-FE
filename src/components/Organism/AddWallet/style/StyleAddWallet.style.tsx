import styled from 'styled-components';
import { theme } from '../../../../theme/mainTheme';

export const StyleAddWallet = styled.div`
  background-color: ${theme.white};
  width: 100%;
  margin: 0 50px 0 0;
  border-radius: 10px;
  overflow: hidden;
  max-width: 800px;
`;
// Atom

export const StylForm = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;
export const TitleWrapper = styled.div`
  border-bottom: 2px solid ${theme.white200};
  padding: 0 30px;
  width: 100%;
`;
export const FormWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  margin: 0 auto;
`;
export const ButtonWrapper = styled.div`
  margin: 20px auto;
`;
export const ButtonWrapperStyle = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  grid-gap: 20px;
`;
