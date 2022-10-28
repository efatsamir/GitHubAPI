import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Container, ThemeProvider } from "react-bootstrap";
import Loader from "../UIElements/Loader";
import useLocale from './../../hooks/useLocale';

const Layout = () => {

  const { locale } = useLocale();

  return (
    <>
        <Suspense fallback={<Loader />}>

          <Helmet
            htmlAttributes={{
              lang: locale,
              dir: locale === "en" ? "ltr" : "rtl",
            }}
          />

          <ThemeProvider dir={locale === "en" ? "ltr" : "rtl"}>
            <Header />
            <Container className="container pt-5 mt-5">
              <Outlet />
            </Container>
          </ThemeProvider>
        </Suspense>
      
    </>
  );
};

export default Layout;
