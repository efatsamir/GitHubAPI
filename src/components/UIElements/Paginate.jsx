import React from "react";
import { Button, Nav } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

// const Paginate = ({ items, page }) => {
//   const pageItems = items.map((_, idx) => (
//     <Pagination.Item key={idx++} active={idx + 1 === page}>
//       { idx+1 }
//     </Pagination.Item>
//   ));

//   return <Pagination>{pageItems}</Pagination>;
// };

// export default Paginate;



const Paginate = ({ page, setPage , items, isPreviousData }) => {

  const [t] = useTranslation();
  
  return (
    <Nav className="d-flex align-items-center justify-content-center gap-2">
        <Button
          variant="success"
          disabled={ isPreviousData || page === 1}
          onClick={(prev) => setPage(prev - 1)}
        >
          {t("Prev")}
        </Button>
        <Button
          variant="success"
          disabled={ isPreviousData || !items.length }
          onClick={(prev) => setPage(prev + 1)}
        >
          {t("Next")}
        </Button>
      </Nav>
  )
}

export default Paginate
