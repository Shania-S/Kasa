import { createBrowserRouter, Outlet } from "react-router-dom";
import { ErrorPage } from "../pages/Error";
import { Accueil } from "../pages/Accueil";
import { Apropos } from "../pages/Apropos";
import { Banner } from "../components/Banner";
import { ViewApartment } from "../pages/Apartment";
import { Footer } from "../components/Footer";

function Root() {
  return (
    <>
      <Banner />
      <div className="kasa-layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Accueil /> },
          {
            path: "/apropos",
            element: <Apropos />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
          {
            path: "apartment/:apartmentId",
            element: <ViewApartment />,
          },
        ],
      },
    ],
  },
]);

export default router;
