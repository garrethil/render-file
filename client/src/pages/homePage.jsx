import { useEffect, useState } from "react";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";
import { useLazyQuery, useMutation } from "@apollo/client";

const HomePage = () => {
  return (
    <>
      <div className="text-light bg-pink-500 p-5">
        {/* this is the search input for user */}
        <Container>
          <div>
            <h1>hello worlds</h1>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
