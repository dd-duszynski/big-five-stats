'use client';

import { getQueryClient } from '@/lib/utils/query-options/get-query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type * as React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

/* TODO_DD: React Query example */
// https://tanstack.com/query/latest/docs/framework/react/examples/nextjs-app-prefetching
// https://www.youtube.com/watch?v=Z4L_UE0hVmo
