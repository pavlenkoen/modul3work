import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export const UserRegistrationPage = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const sendForm = async () => {
    await axios
      .create({
        baseURL: "http://localhost:3334/api/user",
      })
      .post("/registration", { email, password });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Эмейл</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name={"name"}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name={"password"}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="button"
        href="http://localhost:3000/user_login"
        onClick={() => {
          sendForm();
        }}
      >
        Зарегистрироваться
      </Button>
    </Form>
  );
};
