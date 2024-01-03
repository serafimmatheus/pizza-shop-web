import "./global.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="pizzashop-theme">
        <Toaster richColors />
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />;
      </ThemeProvider>
    </HelmetProvider>
  );
}
