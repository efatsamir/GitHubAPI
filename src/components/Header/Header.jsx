import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import useLocale from "../../hooks/useLocale";

const Header = () => {
  const { user, setUser } = useAuth();

  const [t] = useTranslation();

  const { locale, changeLocale } = useLocale();



  const logoutHandler = () => {
    localStorage.removeItem("user");
    setUser({});
  };

  return (
    <header>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Github API</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className={`d-flex align-items-center w-100`} navbarScroll>
              {user && user.username && (
                <Nav.Link as={Link} to="/home">
                  {t("Home")}
                </Nav.Link>
              )}
              {user && user.username && (
                <Nav.Link as={Link} to="/search">
                  {t("Search")}
                </Nav.Link>
              )}

          

              <div className="w-100 d-flex gap-2 justify-content-end align-items-center">
                {locale === "en" && (
                  <Button
                    onClick={() => changeLocale("ar")}
                    variant="dark"
                  >
                    العربية
                  </Button>
                )}

                {locale === "ar" && (
                  <Button
                    onClick={() => changeLocale("en")}
                    variant="dark"
                  >
                    English
                  </Button>
                )}
                {user && user.username && (
                  <Button variant="light" onClick={logoutHandler}>
                    {t("Logout")}
                  </Button>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
