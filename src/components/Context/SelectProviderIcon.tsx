import React, { createContext, PropsWithChildren, useState } from 'react';
import empty from '../Assets/CategoryIcon/empty.svg';

export const ContextIcon = createContext<any>(null);

interface IconType {
  value: string;
  icon: string;
}

export const ProviderIcon = (props: PropsWithChildren) => {
  const [selectIcon, setSelectIcon] = useState<IconType>({ value: 'empty', icon: empty });
  return (
    <ContextIcon.Provider value={{ selectIcon, setSelectIcon }}>
      {props.children}
    </ContextIcon.Provider>
  );
};
