import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

export default function Routes({ pages }) {
  const routes = useRoutes(pages);
  const routeComponents = routes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  return (
    //đọc file App.jsx có giải thích tại sao dùng Suspense
    <Suspense fallback={<p>Loading...</p>}>
      <ReactRouterRoutes>{routeComponents}</ReactRouterRoutes>
    </Suspense>
  );
}

function useRoutes(pages) {
  const routes = Object.keys(pages)
    .map((key) => {
      let path = key
        .replace("./pages", "")
        .replace(/\.(t|j)sx?$/, "")
        .replace(/\/index$/i, "/")
        .replace(/\b[A-Z]/, (firstLetter) => firstLetter.toLowerCase())
        .replace(/\[(?:[.]{3})?(\w+?)\]/g, (_match, param) => `:${param}`);

      if (path.endsWith("/") && path !== "/") {
        path = path.substring(0, path.length - 1);
      }

      return {
        path,
        component: lazy(pages[key]), //đọc file App.jsx có giải thích
      };
    })
    .filter((route) => route.component);

  return routes;
}
