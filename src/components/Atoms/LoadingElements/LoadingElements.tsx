import React from 'react';
import styled from 'styled-components';
import login from '../../Assets/icons/login.svg';

const LoadingWrapper = styled.div`
  display: flex;
  position: absolute;
  background-color: ${({ theme }) => theme.gray400};
  opacity: 90%;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-content: center;
  justify-content: center;
`;

export const LoadingElements = () => {
  return (
    <>
      <LoadingWrapper>
        <img src={login} alt="" />
      </LoadingWrapper>
    </>
  );
};
