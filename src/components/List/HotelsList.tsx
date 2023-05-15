import { Row, Col, Alert } from "react-bootstrap";
import { HotelCard } from "../Card/HotelCard";
import { IHotel } from "../../interfaces";

interface IListProps {
  listName: string;
  ordersArray?: IHotel[];
}

export const HotelsList = (props: IListProps) => {
  return (
    <>
      <h5>{props.listName}</h5>
      <Row className="home">
        {props.ordersArray && props.ordersArray !== null ? (
          props.ordersArray.map((order) => (
            <Col key={order.id}>
              <HotelCard order={order} />
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
