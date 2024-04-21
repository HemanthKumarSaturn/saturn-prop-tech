import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Helmet>
        <title>Music Website</title>
        <meta
          name="description"
          content="Tangled Up in Green, the new gated community plotted villas in North Bangalore, has plenty of amenities and benefits, highlighting the project's contribution to luxury living and tranquillity. How could premium living blend with the lush living?"
        />
        <meta
          name="keywords"
          content="BMRDA Approved, RERA Approved, Prime Location, 115 Acre Township, Techparks And Infrastructures, Luxurious Amenities"
        />
        <meta property="og:title" content="TANGLED UP IN GREEN" />
        <meta
          property="og:description"
          content="Tangled Up in Green, the new gated community plotted villas in North Bangalore, has plenty of amenities and benefits, highlighting the project's contribution to luxury living and tranquillity. How could premium living blend with the lush living?"
        />
        <meta
          property="og:image"
          content="https://saturn-prop-tech.vercel.app/"
        />
        <meta
          property="og:url"
          content="https://saturn-prop-tech.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Helmet>
    </RouterProvider>
  );
}

export default App;
