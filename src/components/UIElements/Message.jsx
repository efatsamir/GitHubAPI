import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const Message = ({ msg }) => {
  const [t] = useTranslation() ;

  return (
    // <Row>
    //   <Col md={8} lg={6}>
    //     <Alert variant="danger">
    //       { msg ? msg : 'Something went wrong! please try again later' }
    //     </Alert>
    //   </Col>
    // </Row>

    <Row>
      <Col>
        <Alert variant="danger">
          { msg ? msg : t('Something went wrong! please try again later') }
        </Alert>
      </Col>
    </Row>
  );
};

export default Message;
