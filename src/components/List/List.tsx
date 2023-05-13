import { Row, Col, Alert } from "react-bootstrap";
import { Card } from "../Card/Card";
import { iHotel } from "../../interfaces";

interface Props {
  listName: string;
  ordersArray?: iHotel[];
}

export const List = (props: Props) => {
  return (
    <>
      <h5>{props.listName}</h5>
      <Row className="home">
        {props.ordersArray && props.ordersArray !== null ? (
          props.ordersArray.map((order) => (
            <Col key={order.id}>
              <Card order={order} />
            </Col>
          ))
        ) : (
          <Alert>
            Мы стараемся стать лучше, скоро здесь появяться новые предложения!
          </Alert>
        )}
      </Row>
    </>
  );
};
