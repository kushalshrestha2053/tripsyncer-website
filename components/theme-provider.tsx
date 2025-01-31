"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import Gleap from "gleap";

export function ThemeProvider({ children }: ThemeProviderProps) {
  React.useEffect(() => {
    Gleap.initialize("878IFwzNAc7ImCuRzoMvKCkkdzZ7da93");
    Gleap.hide();
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
