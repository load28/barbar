import { PropsWithChildren } from 'react';
import { QueryProvider } from '@bb-shared/providers/QueryProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return <QueryProvider>{children}</QueryProvider>;
};
