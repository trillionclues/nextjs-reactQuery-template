"use client";

import { ThemeProvider } from "./themeProvider";
import { ReactQueryProvider } from "./reactQueryProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
}
