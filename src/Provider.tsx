import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HomePage } from "@pages/HomePage";
import { theme } from "@style/theme/Theme";
import { GlobalStyles } from "@style/GlobalStyles";
import { Header } from "@style/layout/Header";
import { Footer } from "@style/layout/Footer";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export const Provider = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};
