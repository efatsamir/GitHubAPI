import React, { useState } from "react";
import { useQuery } from "react-query";
import { search } from "../../api/search";
import List from "./../../components/List/List";
import Loader from "../../components/UIElements/Loader";
import Message from "./../../components/UIElements/Message";
import { Col, Row } from "react-bootstrap";
import Paginate from "../../components/UIElements/Paginate";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t]= useTranslation();
  
  const [page, setPage] = useState(1);

  const { isLoading, isError, data, isFetching, isPreviousData } = useQuery(
    ["items", page],
    () =>
      search({
        searchType: "repositories",
        searchText: "react",
        pageNumber: page,
      }),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  return isLoading || isFetching ? (
    <Loader size="md" />
  ) : isError ? (
    <Row>
      <Col md={8} lg={6}>
        <Message />
      </Col>
    </Row>
  ) : !data.items.length ? (
    <h2 className="text-center">{t("No results found")}</h2>
  ) : (
    <>
      <List items={data.items} />

      <Paginate
        page={page}
        items={data.items}
        setPage={setPage}
        isPreviousData={isPreviousData}
      />
    </>
  );
};

export default Home;
