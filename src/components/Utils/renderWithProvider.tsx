import React, { FC, PropsWithChildren, Suspense } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/mainTheme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LoadingElements } from '../Atoms/LoadingElements/LoadingElements';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
export const renderWithProvider = (children: any) => {
  return render(
    <Suspense fallback={<LoadingElements />}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
};
