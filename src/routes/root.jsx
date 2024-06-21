import { createBrowserRouter, Outlet } from "react-router-dom";
import { ErrorPage } from "../pages/Error";
import { Accueil } from "../pages/Accueil";
import { Apropos } from "../pages/Apropos";
import { Banner } from "../components/Banner";
import { ViewApartment } from "../pages/Apartment";
import { Footer } from "../components/Footer";
import { apartmentsList } from "../data/apartmentsList";

const validateApartmentId = async ({ params }) => {
  const validApartmentIds = apartmentsList.map((apartment) => apartment.id);
  console.log(validApartmentIds);
  console.log(params.apartmentId);
  if (!params.apartmentId || !validApartmentIds.includes(params.apartmentId)) {
    throw new Error("Not Found");
  }
  return true;
};

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
        index: true,
        element: <Accueil />,
      },
      {
        path: "apropos",
        element: <Apropos />,
      },
      {
        path: "apartment",
        errorElement: <ErrorPage />,
        children: [
          {
            path: ":apartmentId",
            loader: validateApartmentId,
            errorElement: <ErrorPage />,
            element: <ViewApartment />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
