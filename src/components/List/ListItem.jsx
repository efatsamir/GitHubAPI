import React from "react";
import { Card, ListGroup, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ListItem = ({ item }) => {
  const [t]= useTranslation();
  const {
    description,
    full_name,
    forks,
    url,
    topics,
    language
    
  } = item;

  return (
    <Card className="rounded my-3  ">
      <Card.Header>
        <Card.Title>{full_name}</Card.Title>
        <Badge  className="bg-danger">
          {forks} forks
        </Badge>
      </Card.Header>

      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Card.Text as="div" className="d-flex gap-2 mb-4">
          <span className="fw-bold">{t("Language")}:</span>
          <span className="text-secondary fw-bold">{language}</span>
        </Card.Text>

       {/* { <Card.Text>
        { topics.map(i => (
           <span key={Math.random()} className='d-block'>** {i}</span>
        ))}
        </Card.Text> } */}

        
        

        <Card.Text as="div" className="d-grid mt-4">
          <Button as={Link} to={`${url}`} variant="secondary">
            {t("Go to repository")}
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ListItem;
