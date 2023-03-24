import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import { Login } from "./pages/auth/login/Login";
import { Register } from "./pages/auth/register/Register";
import Carts from "./pages/features/cart/Carts";
import { Features } from "./pages/features/Features";
import { Home } from "./pages/features/Home/Home";
import { Inbox } from "./pages/features/Inbox/Inbox";
import User from "./pages/features/user/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Features />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "messenger",
        element: <Inbox />,
      },
      {
        path: "cart",
        element: <Carts />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
