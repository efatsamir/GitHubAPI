import React, {  useReducer } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert, Col, Row } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
import { search } from "./../../api/search";
import List from "../List/List";
import Loader from './../UIElements/Loader';
import { useTranslation } from 'react-i18next';

const SearchForm = () => {

  const [t, i18n] = useTranslation();

  // const queryClient = useQueryClient();
  const { refetch, isLoading, isError, error, data } = useQuery(
    "searchResults",
    () => search({ searchType, searchText }),
    { refetchOnWindowFocus: false, enabled: false , cacheTime: 0 }
  );

  const reducer = (prev, next) => ({ ...prev, ...next });

  const [{ searchText, searchType }, setState] = useReducer(reducer, {
    searchText: "",
    searchType: "",
  });

  const onInputChange = (e) => {
    const inputName = e.target.name;
    const val = e.target.value;
    setState({ [inputName]: val });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    refetch();
   
  };



  return (
    <>
      <Row>
        <Col className="offset-md-2 mt-5" md={8}>
          <Form onSubmit={onSubmit}>
            <Row>
              <Col md={5} className="mb-3">
                <Form.Control
                  type="text"
                  name="searchText"
                  placeholder={t("Search")}
                  onChange={onInputChange}
                  value={searchText}
                />
              </Col>

              <Col md={5} className="mb-3">
                <Form.Select
                  name="searchType"
                  value={searchType}
                  onChange={onInputChange}
                >
                  <option disabled value="">
                    {t("select")}...
                  </option>
                  <option value="repositories">Repositories</option>
                  <option value="issues">Issues</option>
                  <option value="users">Users</option>
                </Form.Select>
              </Col>
              <Col md={2} className="mb-3">
                <Button variant="dark" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <div className="px-3">
                      <Loader size='sm' />
                    </div>
                  ) : (
                    t("Search")
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          {isError && (
            <Alert variant="danger">
              {t("Something went wrong! try again later")}
            </Alert>
          )}
        </Col>
      </Row>
      {data && <List items={data.items} searchType={searchType} />}
      
     
    </>
  );
};

export default SearchForm;
