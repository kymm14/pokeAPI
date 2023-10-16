import { Navigate, useRoutes } from "react-router-dom";

// pages
import PokemonListPage from "./src/pages/PokemonListPage";
import PokemonDetailPage from "./src/pages/PokemonDetailPage";
import AboutPage from "./src/pages/AboutPage";
import Page404Page from "./src/pages/Page404Page";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to='/pokemon' />,
    },
    {
      path: "/pokemon",
      element: <PokemonListPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/pokemon/:id",
      element: <PokemonDetailPage />,
    },
    {
      path: "/404",
      element: <Page404Page />,
    },
    {
      path: "*",
      element: <Navigate to='/404' />,
    },
  ]);

  return routes;
}
