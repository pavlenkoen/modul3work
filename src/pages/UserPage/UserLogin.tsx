import { Form, Button, NavLink } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

interface IToken {
  token: string;
}

export const UserLoginPage = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [token, setToken] = useState<string>();
  const sendForm = async () => {
    const response = await axios
      .create({
        baseURL: "http://localhost:3334/api/user",
      })
      .post("/login", { email, password });
    setToken(response.data.token);
    console.log(token);
    /*const newToken = await axios
      .create({
        baseURL: "http://localhost:3334/api/user",
      })
      .get("/check"); */
    setMessage("Вам удалось авторизоваться");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
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
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name={"password"}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          sendForm();
        }}
      >
        Войти
      </Button>
      <NavLink
        className="flex-column"
        style={{
          fontSize: "x-large",
          color: "blue",
        }}
        href={"/user_registration"}
      >
        Зарегистрироваться
      </NavLink>
      <Form.Label style={{ color: "green", fontSize: "30px" }}>
        {message}
      </Form.Label>
    </Form>
  );
};
