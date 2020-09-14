import React from "react";
import Layout from "../../components/layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from "../../actions";
import { useDispatch } from "react-redux";
const Signin = (props) => {
  
  
  const dispatch = useDispatch();
  const userlogin = (e) => {
    e.preventDefault();
    const user = {
      email: "mijo@mijo.com",
      password: "123456",
    };
    dispatch(login(user));
  };
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userlogin}>
              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange={() => {}}
              />
              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Signin;
