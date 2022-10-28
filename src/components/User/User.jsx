import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const User = ({ item }) => {
  const [t] = useTranslation();
  const { login, avatar_url, type, url } = item;

  return (
    <Card className="rounded my-3  ">
      
      <Card.Header>
      <Card.Img src={avatar_url} alt={login} />
        <Card.Title>{login}</Card.Title>
        <Badge className="bg-danger">{type}</Badge>
      </Card.Header>

      <Card.Body>
        {/* <Card.Text>{description}</Card.Text> */}
        {/* <Card.Text as="div" className="d-flex gap-2 mb-4">
          <span className="fw-bold">{t("Language")}:</span>
          <span className="text-secondary fw-bold">{language}</span>
        </Card.Text> */}

        <Card.Text as="div" className="d-grid mt-4">
          <Button as={Link} to={`${url}`} variant="secondary">
            {t("see profile")}
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default User;
