import styled from 'styled-components';

type Props = {
  icon: string;
  active?: boolean;
  color?: string;
};

const CircleIcon = styled.div<Props>`
  text-decoration: none;
  display: block;
  width: 50px;
  height: 50px;
  opacity: 60%;
  border-radius: 100%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  border: none;
  background-color: ${({ color }) => (color ? color : 'transparent')};

  // &.active {
  //   background-color: ${({ color }) => (color ? color : 'white')};
  // }
`;

export default CircleIcon;
