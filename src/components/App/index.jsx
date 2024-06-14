import { useState } from "react";
import "./App.scss";
import "./../../index.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import router from "../../routes/root";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
