import React from 'react';
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

export const SelectedIcon = () => {
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
  function itemToString(item: any) {
    return item ? item.icon : '';
  }

  function Select() {
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
        <div className="w-72 flex flex-col gap-1">
          <label {...getLabelProps()}>Choose your favorite book:</label>
          <div
            className="p-2 bg-white flex justify-between cursor-pointer"
            {...getToggleButtonProps()}>
            <span>{selectedItem ? <img src={selectedItem.icon} alt="" /> : 'Elements'}</span>
            <span className="px-2">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
          </div>
        </div>
        <ul
          {...getMenuProps()}
          className="absolute w-72 p-0 bg-white shadow-md max-h-80 overflow-scroll">
          {isOpen &&
            icon.map((item, index) => (
              <li {...getItemProps({ item, index })}>
                <img src={item.icon} alt="" />
              </li>
            ))}
        </ul>
      </div>
    );
  }
  return (
    <>
      <Select />
    </>
  );
};
