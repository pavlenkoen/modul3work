import { Row, Col, Alert } from "react-bootstrap";
import { CountryCard } from "../Card/CountryCard";
import { ICountry } from "../../interfaces";

interface IListProps {
  listName: string;
  ordersArray?: ICountry[];
}

export const CountryList = (props: IListProps) => {
  return (
    <>
      <h5>{props.listName}</h5>
      <Row className="home">
        {props.ordersArray && props.ordersArray !== null ? (
          props.ordersArray.map((order) => (
            <Col key={order.id}>
              <CountryCard order={order} />
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
