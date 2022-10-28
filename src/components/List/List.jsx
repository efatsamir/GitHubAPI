import React from "react";
import { Row, Col } from "react-bootstrap";
import User from "../User/User";
import ListItem from "./ListItem";

const List = ({ items, searchType }) => {
  
  return (
    <Row>
      {items.map((item) => (
        <Col sm={6} md={4} lg={4} key={item.node_id}>
          { searchType === 'users' ? (
            <User item={item}  key={item.node_id} />
          ): (
            
            <ListItem item={item}  key={item.node_id} />
          )
        }
          
        </Col>
      ))}
    </Row>
  );
};

export default List;
