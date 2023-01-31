import styled from 'styled-components';

type Props = {
  icon: string;
  active?: boolean;
  color?: string;
};

export const ButtonPlus = styled.button<Props>`
  text-decoration: none;
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  cursor: pointer;
  border: none;
  background-color: ${({ color }) => (color ? color : 'transparent')};
  // &.active {
  //   background-color: ${({ color }) => (color ? color : 'white')};
  // }
`;
