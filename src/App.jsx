import "./App.css";
import React, { useEffect } from "react";
import Maincontent from "./layouts/Content/Maincontent";
import { RouterProvider } from "react-router-dom";
import { router } from "./layouts/Routes";



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
