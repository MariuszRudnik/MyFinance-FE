import React, { createContext, PropsWithChildren, ProviderProps, useState } from 'react';

import { theme } from '../../theme/mainTheme';

export const MainContext = createContext<any>(null);

export const MainProvider = (props: PropsWithChildren) => {
  const [darkOrLight, setDarkOrLight] = useState<any>({ value: 'light', theme: theme });
  return (
    <MainContext.Provider value={{ darkOrLight, setDarkOrLight }}>
      {props.children}
    </MainContext.Provider>
  );
};
