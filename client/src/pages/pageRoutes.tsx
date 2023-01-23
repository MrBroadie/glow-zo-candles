import React from "react";
import { Route } from "react-router-dom";
import pagesData from "./pagesData";

export const defaultPageRoutes = pagesData
  .filter((page) => page.showDefault)
  .map(({ path, element, title }) => {
    const routeArgs = { path, element };

    return <Route {...routeArgs} key={title} />;
  });

export const authPageRoutes = pagesData
  .filter((page) => !page.showDefault)
  .map(({ path, element, title }) => {
    const routeArgs = { path, element };

    return <Route {...routeArgs} key={title} />;
  });
