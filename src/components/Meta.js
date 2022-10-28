import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, canonical, meta }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name={meta.name} content={meta.content} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "GitHub API",
  canonical: '/home',
  meta: {
    name: "description",
    content: "GitHub API, search for repositories & users",
  },
};

export default Meta;
