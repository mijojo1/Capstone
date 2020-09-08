import React from "react";
import Layout from "../../components/layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";

const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="FirstName"
                    placeholder="Fist Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="LastName"
                    placeholder="Last Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
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
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Signup;
