import React, { useReducer } from "react";
// import styles from "./Login.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import Message from "../UIElements/Message";
import { useTranslation } from "react-i18next";
import Meta from "./../Meta";

const Login = () => {
  const [t] = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  // console.log(location);

  const reducer = (prev, next) => ({ ...prev, ...next });
  const { setUser } = useAuth();

  const [{ username, password, error }, setState] = useReducer(reducer, {
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setState({ [inputName]: value });

    //  console.log({ username });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (username === "efat" && password === "1234") {
      setUser({ username, roles: [1] });
      localStorage.setItem("user", JSON.stringify({ username, roles: [1] }));
      setState({ username: "", password: "" });
      navigate(from, { replace: true });
      return; // early return is better than else
    }
    setState({ error: "Invalid username or password" });
  };

  return (
    <>
      <Meta
        title="Login"
        canonical="/login"
        meta={{ name: "description", content: "Login to GitHub API account" }}
      />
      <Row>
        <Col
          sm={8}
          md={6}
          lg={4}
          className="offset-sm-2 offset-md-3 offset-lg-4"
        >
          <Form onSubmit={onSubmit}>
            <h2 className="text-center mb-4">{t("Login")}</h2>
            <FormGroup className="form-group mb-3">
              <FormLabel htmlFor="username">{t("Username")}</FormLabel>
              <FormControl
                type="text"
                name="username"
                id="username"
                className="form-control"
                onChange={onInputChange}
                value={username}
              />
            </FormGroup>
            <FormGroup className="form-group mb-3">
              <FormLabel htmlFor="password">{t("Password")}</FormLabel>
              <FormControl
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={onInputChange}
                value={password}
              />
            </FormGroup>

            <div className="d-grid mt-4 mb-2">
              <Button type="submit" className="btn btn-success">
                {t("Login")}
              </Button>
            </div>
          </Form>
          {error && <Message msg={error} />}
        </Col>
      </Row>
    </>
  );
};

export default Login;
