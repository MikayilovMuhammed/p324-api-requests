// import axios from "axios";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { cardService } from "../../APIs/Services/Cards";
// import { getAllPosts } from "../actions";
import "./index.scss";

function Cards() {
  const [users, setUsers] = React.useState([]);

  //   React.useEffect(() => {
  //     // const usersFormAPI = axios.get(
  //     //   "https://jsonplaceholder.typicode.com/posts"
  //     // );

  //     // usersFormAPI.then(({ data }) => {
  //     //   setUsers(data);
  //     // });
  //   }, []);

  // React.useEffect(() => {
  //   getAllPosts(setUsers);
  // }, []);

  React.useEffect(() => {
    // console.log("cards:", cardService);
    cardService.getAllPosts().then(({ data: userData }) => {
      setUsers(userData);
    });
  }, []);

  // const handlePost = () => {
  //   const handleInput = {
  //     userId: 1,
  //     title: "Salam",
  //     body: "sds",
  //   };
  //   cardService.postNewPosts(handleInput);
  // };
  const handlePut = () => {
    const handleInput = {
      userId: 1,
      title: "Salam",
      body: "sds",
    };
    cardService.editPost(2, handleInput);
  };

  return (
    <Container>
      <Row>
        {users.map(({ id, title, body }) => (
          <Col md={4} key={id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <Button onClick={handlePut} variant="primary">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
