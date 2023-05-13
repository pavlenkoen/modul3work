import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <Alert variant="danger" style={{ textAlign: "center" }}>
        <h5>Ошибка 404</h5>
        <div>Страница не найдена</div>
        <Link to={"/"}>Вернуться на главную страницу</Link>
      </Alert>
    </>
  );
};
