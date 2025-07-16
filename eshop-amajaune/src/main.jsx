import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductPage from "./pages/productPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import ManageProduct from "./pages/manageProduct.jsx";
import FormProduct from "./components/formProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "/",
        element: <Home />,
      },
       {
        path: "/manage",
        element: <ManageProduct />,
      },
      {
        path: "/addproduct",
        element: <FormProduct />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
