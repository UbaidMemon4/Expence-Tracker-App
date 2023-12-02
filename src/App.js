import { ConfigProvider } from "antd";
import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Store from "./store/index";
import Home from "./components/home/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      
    ],
  },
]);
function App() {
  return (
    <ConfigProvider>
      <Provider store={Store}>
      <RouterProvider router={router} />
      </Provider>
  </ConfigProvider>
  );
}

export default App;
