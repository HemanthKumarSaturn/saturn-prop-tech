import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
