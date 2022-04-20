import React, { Fragment, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import BlogList from "./PageBlogList";
import BlogPage from "./PageBlogDetail"
const Blog = (props, { match }) => {
  var mounted = true;
  useEffect(() => {
    mounted = true;

    return () => {
      // Anything in here is fired on component unmount.
      mounted = false;
    };
  }, []);

  return (
    <Fragment>
      <Route
        exact
        path={`${window.location.path}`}
        component={BlogList}
      />
      <Route
        exact
        path={`${window.location.path}/page/:id`}
        component={BlogPage}
      />
    </Fragment>
  );
};
export default Blog;
