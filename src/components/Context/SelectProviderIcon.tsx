import React, { createContext, PropsWithChildren, ProviderProps, useState } from 'react';
import empty from '../Assets/CategoryIcon/empty.svg';

export const ContextIcon = createContext<any>(null);

export const ProviderIcon = (props: any) => {
  const [selectIcon, setSelectIcon] = useState<any>({ value: 'empty', icon: empty });
  return (
    <ContextIcon.Provider value={{ selectIcon, setSelectIcon }}>
      {props.children}
    </ContextIcon.Provider>
  );
};
