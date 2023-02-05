import React, { useContext, useEffect, useState } from 'react';
import { useSelect } from 'downshift';

import box from '../../Assets/CategoryIcon/box.svg';
import bus from '../../Assets/CategoryIcon/bus.svg';
import car from '../../Assets/CategoryIcon/car.svg';
import clean from '../../Assets/CategoryIcon/clean.svg';
import dog from '../../Assets/CategoryIcon/dog.svg';
import drink from '../../Assets/CategoryIcon/drink.svg';
import eat from '../../Assets/CategoryIcon/eat.svg';
import energy from '../../Assets/CategoryIcon/energy.svg';
import empty from '../../Assets/CategoryIcon/empty.svg';
import home from '../../Assets/CategoryIcon/home.svg';
import mood from '../../Assets/CategoryIcon/mood.svg';
import other from '../../Assets/CategoryIcon/other.svg';
import photo from '../../Assets/CategoryIcon/phone.svg';
import shirt from '../../Assets/CategoryIcon/shirt.svg';
import sport from '../../Assets/CategoryIcon/sport.svg';
import taxi from '../../Assets/CategoryIcon/taxi.svg';
import styled from 'styled-components/macro';
import { theme } from '../../../theme/mainTheme';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import { ContextIcon, ProviderIcon } from '../../Context/SelectProviderIcon';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 220px;
  position: absolute;
  padding: 10px;
  list-style-type: none;
  background: ${theme.secondary};
  z-index: 1;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
const WrapperSelected = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${theme.background};
  border-radius: 15px;
  padding-left: 10px;
`;
const WrapperIcon = styled.div`
  background: ${theme.secondary};
  border-radius: 5px;
  padding: 2px;
  margin: 5px 10px 5px 5px;
`;
const NewParagraph = styled(Paragraph)`
  padding: 0 5px;
`;

export const SelectedIcon = (setIcon: any) => {
  const icon = [
    { value: 'box', icon: box },
    { value: 'bus', icon: bus },
    { value: 'car', icon: car },
    { value: 'clean', icon: clean },
    { value: 'dog', icon: dog },
    { value: 'drink', icon: drink },
    { value: 'eat', icon: eat },
    { value: 'energy', icon: energy },
    { value: 'empty', icon: empty },
    { value: 'home', icon: home },
    { value: 'mood', icon: mood },
    { value: 'other', icon: other },
    { value: 'photo', icon: photo },
    { value: 'shirt', icon: shirt },
    { value: 'sport', icon: sport },
    { value: 'taxi', icon: taxi }
  ];

  const itemToString = (item: any) => {
    return item ? item.icon : '';
  };

  const Select = () => {
    const { selectIcon, setSelectIcon } = useContext(ContextIcon);
    const funtiItme = (item: any) => {
      setSelectIcon(item);
    };
    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps
    } = useSelect({
      items: icon,
      itemToString
    });

    return (
      <div>
        <div {...getToggleButtonProps()}>
          <WrapperSelected>
            <label {...getLabelProps()}>
              <NewParagraph>Choose your favorite icon:</NewParagraph>
            </label>
            <WrapperIcon>
              {selectIcon ? <img src={selectIcon.icon} alt="" /> : <img src={empty} alt="" />}
            </WrapperIcon>
          </WrapperSelected>
        </div>

        <div {...getMenuProps()}>
          {isOpen ? (
            <List>
              {icon.map((item, index) => (
                <li key={index} {...getItemProps({ item, index })}>
                  <img onClick={() => funtiItme(item)} src={item.icon} alt="" />
                </li>
              ))}
            </List>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <>
      <Select />
    </>
  );
};
