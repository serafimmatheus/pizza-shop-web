import { createBrowserRouter } from "react-router-dom";

import { DashboardPage } from "./pages/app/dashboard/dashboard";
import SignInPage from "./pages/auth/signin";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import SignUpPage from "./pages/auth/signup";
import { OrdersPage } from "./pages/app/orders/orders";
import { NotFound } from "./pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/orders", element: <OrdersPage /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
    ],
  },
]);
