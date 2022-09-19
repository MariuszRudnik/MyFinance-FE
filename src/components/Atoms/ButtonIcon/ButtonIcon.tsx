import styled from 'styled-components';

type Props = {
  icon: string;
  active?: boolean;
  color?: string;
};

const ButtonIcon = styled.button<Props>`
  text-decoration: none;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  background-color: ${({ color }) => (color ? color : 'transparent')};
  // &.active {
  //   background-color: ${({ color }) => (color ? color : 'white')};
  // }
`;

export default ButtonIcon;
