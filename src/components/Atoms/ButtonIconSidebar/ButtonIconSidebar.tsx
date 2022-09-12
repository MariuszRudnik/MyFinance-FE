import React from 'react';
import styled from 'styled-components';
import twitterIcon from '../../Assets/icons/twitter.svg';


type Props = {
  active?: boolean;
  length:string;
};

const ButtonIcon = styled.button<Props>`
  text-decoration: none;
  display: block;
  width: ${({length})=> {
    if(length == 'small'){
      return '67px'
    } else {
      return '200px'
    }
  }};
  height: 67px;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  &.active {
    background-color: white;
  }
`;
const ButtonsParagraph = styled.p<Props>`
  display: ${({length})=>{
    if(length == 'small'){
      return 'none'
    }else {
      return 'block'
    }
  }
};
  margin-left: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;




export const ButtonIconsSidebar = ()=>{
  return (
    <ButtonIcon active length={'big'} >
      <ButtonWrapper>
        <img src={twitterIcon} alt="" />
        <ButtonsParagraph length={'big'}>Settings</ButtonsParagraph>
      </ButtonWrapper>
    </ButtonIcon>
  )
}